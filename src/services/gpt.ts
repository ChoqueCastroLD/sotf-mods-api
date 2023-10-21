type gptMessage = {
    role: string;
    message: string;
    who: string;
}

export async function chat(prompt: string, message: string, messages: gptMessage[], chat_id: string): Promise<string> {
    console.log(messages[1]);
    
    const raw = JSON.stringify({
        "env": "chatbot",
        "prompt": prompt,
        "context": prompt,
        "userName": "",
        "aiName": "",
        "model": "gpt-3.5-turbo",
        "temperature": 0.1,
        "maxTokens": 1024*4,
        "maxResults": 1,
        "apiKey": "",
        "service": "openai",
        "embeddingsIndex": "",
        "stop": "",

        "botId": "default",
        "contextId": 25,
        "chatId": chat_id,
        "customId": chat_id,
        "messages": messages.map((msg, i) => ({
            "id": `${i+1}`,
            "role": msg.role,
            "content": msg.message,
            "who": msg.who,
            "html": ""
        })),
        "newMessage": message,
        "session": "N/A",
        "stream": false,
    });

    const r = await fetch(Bun.env.KELVINGPT_API + "", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "authority": Bun.env.KELVINGPT_API_AUTHORITY + "",
        },
        body: raw,
        redirect: "follow",
    });
    const result = await r.json();
    console.log(result);
    
    
    const { reply } = result;
    return reply;
}