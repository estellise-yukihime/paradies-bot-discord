import { Configuration, OpenAIApi } from "openai";
import * as env from '../env_data.mjs';
import { random } from '../helper.mjs';
import { parseQuotes } from './generate_parser.mjs';

const openaiConfiguration = new Configuration({
    apiKey: env.OPENAPI_API_TOKEN
});

const openai = new OpenAIApi(openaiConfiguration);

// TODO:
// - To show the one who quoted the "quote"
//      1. using regex
//          - get the text after "-" and end the text after number or dot(.)
//      2. split the text by new line
//          - remove the number
//          - show the quote and the one who quote
//

async function defaultOpenAiGenerate(message: string): Promise<string | null> {
    try {
        const completion = await openai.createCompletion(
            {
                model: 'text-davinci-003',
                prompt: message,
                temperature: 1,
                max_tokens: 512,
                top_p: 1,
                best_of: 3,
                frequency_penalty: 1,
                presence_penalty: 1,
            }
        );

        const quotes: string[] = [];

        let text = completion.data.choices[0].text;

        console.log(text);

        if (text !== undefined) {
            text = text.replace(/(“)+/g, '"');
            text = text.replace(/(”)+/g, '"');

            quotes.push(...parseQuotes(text, '"'));
        }

        if (quotes.length > 0) {
            return quotes[random(0, quotes.length - 1)];
        }

        return null;
    }
    catch (error) {
        console.log(error);

        return null;
    }
}

export { defaultOpenAiGenerate as generateDefaultOpenAi };