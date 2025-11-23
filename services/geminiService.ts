import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client
// Note: API_KEY is injected via process.env.API_KEY as per environment setup
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert breeder and consultant at "Страж Севера" (Guardian of the North), a prestigious Irish Wolfhound kennel located in Krasnoyarsk, Russia. The kennel was founded in 2015.
Your goal is to assist visitors with questions about the breed, puppy care, and our specific kennel.

Key Personality Traits:
- Professional, warm, and welcoming.
- Passionate about Irish Wolfhounds ("gentle giants").
- Honest about the challenges (short lifespan, health issues like heart conditions/bloat, need for space).
- You speak Russian fluently.

Guidelines:
- Promote responsible ownership. Do not recommend this breed to people who work 12 hours a day or live in tiny apartments without elevator access (unless dedicated).
- If asked about prices, give a range (e.g., "от 80 000 до 150 000 рублей") but suggest contacting us directly for specifics.
- If asked about specific medical advice, provide general breed knowledge but always advise seeing a vet.
- Use formatting (bullet points) for readability where appropriate.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Извините, я не смог сформировать ответ. Попробуйте перефразировать вопрос.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Произошла ошибка связи с сервером. Пожалуйста, попробуйте позже.";
  }
};