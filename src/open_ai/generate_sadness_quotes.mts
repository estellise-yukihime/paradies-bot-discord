import { generateDefaultOpenAi } from './qoutes_generator.mjs';

async function generateSadness(about: string): Promise<string | null> {
    return generateDefaultOpenAi(`Sadness Quotes about "${about}"`);
}

export { generateSadness };