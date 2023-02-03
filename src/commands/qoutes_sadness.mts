import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { generateSadness } from '../open_ai/generate_sadness_quotes.mjs';
import { CommandData } from "./command_types.mjs";

export const qoutes_sadness: CommandData = {
    data: new SlashCommandBuilder()
        .setName('qoute-sadness')
        .setDescription('Sadness qoute for sad people')
        .addStringOption(option => {
            return option.setName('about')
                .setDescription('The sadness you want.')
                .setRequired(true);
        }),
    async execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void> {
        await interaction.deferReply();

        // load qoutes from openai
        const quote = await generateSadness(interaction.options.getString('about', true));

        if (quote !== null && quote !== '') {
            await interaction.followUp(quote);
        }
        else {
            await interaction.followUp('My brain cannot think anymore.');
        }
    }
}