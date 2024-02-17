import { ChatGPTAPI } from 'chatgpt'

export async function chat(prompt: string, text: string, parent_id: string | undefined, gpt_key: string): Promise<any> {
    const api = new ChatGPTAPI({
        apiKey: gpt_key.trim(),
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