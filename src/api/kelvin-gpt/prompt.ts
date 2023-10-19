import { Elysia, t } from 'elysia'

import { chat } from '../../services/gpt'
import { prisma } from '../../services/prisma';
import { sanitizeInput } from '../../shared/sanitize';
import { commands, kelvinPrompt } from '../../shared/kelvin-gpt';
import { closest } from 'fastest-levenshtein';


export const router = new Elysia()
    .get(
        '/api/kelvin-gpt/prompt',
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

            const sanitizedText = sanitizeInput(text)
            const prompt = kelvinPrompt(sanitizeInput(context))

            messages.push({
                id: -1,
                message: sanitizedText,
                role: "user",
                who: "User: ",
                chatId: chat_id,
                createdAt: new Date(),
                updatedAt: new Date(),
            })

            let answer;
            try {
              answer = await chat(prompt, text, messages, chat_id)
            } catch (error) {
              answer = "|Sorry, I'm having trouble understanding you. (GPT API is down, try again tomorrow)"
            }
            console.log({ answer })

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
                message: sanitizedText,
                role: "user",
                who: "User: ",
              }
            })
            await prisma.kelvinGPTMessages.create({
              data: {
                chatId: chat_id,
                message: `${command}|${response}`,
                role: "assistant",
                who: "AI: ",
              }
            })
            
            console.log({ chat_id, message: sanitizedText, answer, history: messages.map(msg => msg.message) })

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