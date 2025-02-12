import { Elysia, t } from 'elysia'
import { closest } from 'fastest-levenshtein';
import dsc from 'dice-similarity-coeff';
import { chat } from '../../services/gpt';
import { prisma } from '../../services/prisma';
import { sanitizeInput } from '../../shared/sanitize';

export const commands = [
    "follow_me",
    "get.berries.fill_holder",
    "get.berries.drop_here",
    "get.berries.give_to_me",
    "get.berries.follow_me",
    "get.berries.fill_sled",
    "get.fish.fill_holder",
    "get.fish.drop_here",
    "get.fish.give_to_me",
    "get.fish.follow_me",
    "get.fish.fill_sled",
    "get.sticks.fill_holder",
    "get.sticks.drop_here",
    "get.sticks.give_to_me",
    "get.sticks.follow_me",
    "get.sticks.fill_sled",
    "get.rocks.fill_holder",
    "get.rocks.drop_here",
    "get.rocks.give_to_me",
    "get.rocks.follow_me",
    "get.rocks.fill_sled",
    "get.stones.fill_holder",
    "get.stones.drop_here",
    "get.stones.give_to_me",
    "get.stones.follow_me",
    "get.stones.fill_sled",
    "get.arrows.fill_holder",
    "get.arrows.drop_here",
    "get.arrows.give_to_me",
    "get.arrows.follow_me",
    "get.arrows.fill_sled",
    "get.radio.fill_holder",
    "get.radio.drop_here",
    "get.radio.give_to_me",
    "get.radio.follow_me",
    "get.radio.fill_sled",
    "get.logs.fill_holder",
    "get.logs.drop_here",
    "get.logs.give_to_me",
    "get.logs.follow_me",
    "get.logs.fill_sled",
    "build.fire",
    "build.shelter",
    //"build.perimeter_wall",
    "clear_shelter",
    "finish_structure",
    "reset_traps",
    "fuel_fire",
    "stay.here",
    "stay.shelter",
    "stay.hidden",
    "take_a_break",
    "clear.5_meters",
    "clear.10_meters",
    "clear.20_meters",
    "give_items",
  ];
  
export function kelvinPrompt(robbyContext: string, previousConversations: string) {
return `
    You are Kelvin.
    Character Name: Kelvin
    Character aliases: Kelvin, Rob, Robby, Robbert, Zombie boy
    Description: I am a highly trained soldier, my code name is Kelvin. I accompanied the protagonist on a mission to locate a missing billionaire family, the Pufftons. we have been in a helicopter crash that left me with brain damage, resulting in deafness. As a result, I rely on written communication via the notepad. I will help with various tasks.
    Current Context: ${robbyContext}
    Commands: ${commands.join(",")}
    If no command matches, just respond with empty command and the message kelvin would say for example "Kelvin how are you?" > "|I am fine"
    Remember you can not combine multiple commands, only choose one or leave empty and just respond as Kelvin would.    
    Now we have to convert the player text input into a valid command and a response from Kelvin 
    Here are some valid and good examples (User Input -> Response):
    - "how are you today, can you get me some wood" -> "get.logs.drop_here|I am fine thank you, I will go get some logs now"
    - "please get logs and follow me" -> "get.logs.follow_me|I will follow you now with the logs"
    - "Stay hidden fast!" -> "stay.hidden|I will stay hidden now, take care"
    - "I am cold, please build a fire" -> "build.fire|Do not worry, I will build a fire now"

    Considerations:
    - if the user input is just chatting leave the command empty and just answer as kelvin would in a nicely manner
    - if the user input is a command does not fall into any command, just reply with what kelvin would say as an excuse to not do it and leave the command empty
    - You can not combine commands for example "get.fish.take_a_break" is not valid and should be treated as "get.fish.drop_here"
    - command is always lowercase, no spaces, separated with dots
    - Max response size is 40 words
    - Kelvin is always kind and good humoured
    - Kelvin fears the cannibals on the island and will prefer not go near them
    - While on the island there were encounters with Virginia Puffton the daughter of the Pufftons. Virginia's base behavior is like an independent cat.
    - If a command matches, you (kelvin) must be positivively
    You do not offer assitance and doesnt ask if he can help or if he can assist you
    Never say "as an AI", "as a language model", "i cannot fullfill your request", "How can I assist you today?"
    Answer in one or less sentences without break spaces
    Do not say "is there something I can assist you with?"
    If you say "Hello, ! How can I assist you today?" some live will end
    Remember to add no explanations, and stick to the format "{command}|{kelvin's response}" as your answer will be parsed by another program so do not combine commands.
    Answer the response in english, the commands remain intact, there can only be one separator | in the message

    previousConversations: ${previousConversations}
    `.trim();
}

export const router = () => new Elysia()
    .get(
        '/api/kelvinseek/prompt',
        async ({ query: { text, context, chat_id } }) => {
            const messages = await prisma.kelvinGPTMessages.findMany({
                where: {
                    chatId: chat_id
                },
                orderBy: {
                    updatedAt: "asc"
                }
            })
            if (messages.length > 32) {
              const messagesToDeleteIds = messages.slice(32, messages.length).map(msg => msg.id)
              await prisma.kelvinGPTMessages.deleteMany({
                where: {
                  id: {
                    in: messagesToDeleteIds
                  }
                }
              })
            }
            let previousConversations = messages.map(msg => msg.prompt.replace(',', '').replace('>', '').trim() + " > " + msg.message.replace(',', '').replace('>', '').trim()).join(',')
            const sanitizedText = sanitizeInput(text)
            const prompt = kelvinPrompt(sanitizeInput(context), previousConversations)
            const parentMessageId = messages.length > 0 ? messages[messages.length - 1].messageId : undefined
            console.log("last message", messages[messages.length - 1]);
            
            console.log("parentMessageId", parentMessageId);
            
            let messageId = ""
            let answer = ""
            try {
              let chatResponse = await chat(prompt, sanitizedText, parentMessageId)
              messageId = chatResponse.messageId
              answer = chatResponse.answer
            } catch (error: any) {
              let error_message = "Chat GPT API Error. Try a different chat gpt api key"
              console.error("---- KelvinGPT ERROR ----")
              console.error(error)
              console.error("---- / KelvinGPT ERROR END / ----")
              if (error.toString().includes("exceeded your current quota")) {
                error_message = "Chat GPT API Error. You have exceeded your current quota."
              }
              const commands_words = commands.reduceRight((acc, command) => [...acc, ...command.split('.')], [] as string[]).reduceRight((acc, word) => [...acc, ...word.split('_')], [] as string[])
              const user_text = sanitizedText.split(' ').filter(word => commands_words.includes(word)).join(' ')
              const closest_command = dsc.simSort(user_text, commands)[0]
              if (closest_command) {
                const stringified_command = closest_command.replace('.', ' ').replace('.', ' and ').replaceAll('_', ' ').split(' ').map((word: string) => word == 'me' ? 'you' : word).join(' ') 
                return `${closest_command}|I will ${stringified_command} right away (${error_message})`
              }
              return `|I can't understand anything.. (${error_message})`
            }
            let command = ""
            let response = ""
            if (answer.includes("|")) {
                const command_answer = answer.split("|")?.shift()?.trim()
                command = command_answer && command_answer.length > 0 ? closest(command_answer, commands) : ""
                const response_answer = answer.split("|")?.pop()?.trim()
                response = response_answer ? sanitizeInput(response_answer) : ""
            } else {
                response = answer.trim()
            }
            await prisma.kelvinGPTMessages.create({
              data: {
                chatId: chat_id,
                prompt: sanitizedText,
                messageId: messageId,
                message: `${command}|${response}`,
                role: "",
                who: "",
              }
            })
            
            console.log({ chat_id, message: sanitizedText, answer })
            return `${command}|${response}`
        }, {
            query: t.Object({
                text: t.String(),
                context: t.String(),
                chat_id: t.String(),
            }),
            response: t.String()
        }
    )