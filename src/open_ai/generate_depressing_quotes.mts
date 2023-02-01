import { generateDefaultOpenAi } from './qoutes_generator.mjs';

async function generateDepressing(about: string): Promise<string | null> {
    return await generateDefaultOpenAi(`Depressing Quotes about "${about}"`);
}

export { generateDepressing };