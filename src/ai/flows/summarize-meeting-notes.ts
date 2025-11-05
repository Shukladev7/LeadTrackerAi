// Summarize Meeting Notes Flow
'use server';
/**
 * @fileOverview Summarizes lengthy meeting notes into concise summaries using GenAI.
 *
 * - summarizeMeetingNotes - A function that handles the summarization of meeting notes.
 * - SummarizeMeetingNotesInput - The input type for the summarizeMeetingNotes function.
 * - SummarizeMeetingNotesOutput - The return type for the summarizeMeetingNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMeetingNotesInputSchema = z.object({
  notes: z
    .string()
    .describe('The lengthy meeting notes to be summarized.'),
});
export type SummarizeMeetingNotesInput = z.infer<typeof SummarizeMeetingNotesInputSchema>;

const SummarizeMeetingNotesOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the meeting notes.'),
});
export type SummarizeMeetingNotesOutput = z.infer<typeof SummarizeMeetingNotesOutputSchema>;

export async function summarizeMeetingNotes(input: SummarizeMeetingNotesInput): Promise<SummarizeMeetingNotesOutput> {
  return summarizeMeetingNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMeetingNotesPrompt',
  input: {schema: SummarizeMeetingNotesInputSchema},
  output: {schema: SummarizeMeetingNotesOutputSchema},
  prompt: `Summarize the following meeting notes into a concise summary:

  {{{notes}}}`,
});

const summarizeMeetingNotesFlow = ai.defineFlow(
  {
    name: 'summarizeMeetingNotesFlow',
    inputSchema: SummarizeMeetingNotesInputSchema,
    outputSchema: SummarizeMeetingNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
