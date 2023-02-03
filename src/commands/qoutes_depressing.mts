import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { generateDepressing } from '../open_ai/generate_depressing_quotes.mjs';
import { CommandData } from "./command_types.mjs";

export const qoutes_depressing: CommandData = {
    data: new SlashCommandBuilder()
        .setName('qoute-depressing')
        .setDescription('Depressing qoutes for depress weebs.')
        .addStringOption(option =>
            option.setName('about')
                .setDescription('The depressing thoughts you want.')
                .setRequired(true)
        ),
    async execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void> {
        await interaction.deferReply();

        // load qoutes from openai
        const quote = await generateDepressing(interaction.options.getString('about', true));

        if (quote !== null && quote !== '') {
            await interaction.followUp(quote);
        }
        else {
            await interaction.followUp('I only have one brain cell left!');
        }
    }
};