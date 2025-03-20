'use server';

import { PromptData } from './data';

import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';

export async function sendToAi(promptData: PromptData) {

  const prompt = `Study the entire transcript of ${promptData.comedian.name} on this page ${promptData.comedian.transcripts[0]}. ` +
                  `Once you're done studying, write a fresh content piece in the style of ${promptData.comedian.name} ` +
                  `and for the following idea: "${promptData.ideaPrompt}". ` +
                  `The content piece will be used for a ${promptData.format.name} so optimise it accordingly. ` +
                  `Do not explain your thought process or anything else. Simply respond with the content piece only and nothing else.`;

  const stream = createStreamableValue('');

  (async () => {
    const { textStream } = streamText({
      model: google('gemini-2.0-flash-001'),
      prompt,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };

}