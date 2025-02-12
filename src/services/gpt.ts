import { ChatGPTAPI } from 'chatgpt'

export async function chat(prompt: string, text: string, parent_id: string | undefined): Promise<any> {
    const api = new ChatGPTAPI({
        apiKey: Bun.env.GPT_API_KEY!,
        completionParams: {
            model: "gpt-4o-mini",
        }
    })
    const gptOptions: any = {};

    if (parent_id) {
        gptOptions['parentMessageId'] = parent_id;
    }

    if (prompt) {
        gptOptions['systemMessage'] = prompt;
    }
    
    const res = await api.sendMessage(text, gptOptions)
    return {
        messageId: res.id,
        answer: res.text
    }
}