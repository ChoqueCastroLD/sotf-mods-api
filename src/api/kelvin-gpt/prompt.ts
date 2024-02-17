import { Elysia, t } from 'elysia'
import { closest } from 'fastest-levenshtein';
import dsc from 'dice-similarity-coeff';

import { chat } from '../../services/gpt'
import { prisma } from '../../services/prisma';
import { sanitizeInput } from '../../shared/sanitize';
import { commands, kelvinPrompt } from '../../shared/kelvin-gpt';


export const router = new Elysia()
    .get(
        '/api/kelvin-gpt/prompt',
        async ({ query: { text, context, chat_id, gpt_key } }) => {
            if (!gpt_key) {
              return `|Hi! I'm sorry I can't help right now. (You need to provide a GPT API KEY)`
            }
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
              let chatResponse = await chat(prompt, sanitizedText, parentMessageId, gpt_key)
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
                gpt_key: t.String(),
            }),
            response: t.String()
        }
    )
