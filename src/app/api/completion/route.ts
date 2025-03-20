import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});
const myModel = google('gemini-2.0-flash-001');

export async function POST(req: Request) {
    const { prompt }: { prompt: string } = await req.json();
    const { text } = await generateText({
        model: myModel,
        prompt,
    });

    return Response.json({ text });
}