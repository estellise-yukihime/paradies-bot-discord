import { CacheType, SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

export type CommandData = {
    data: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
    execute: (interaction: ChatInputCommandInteraction<CacheType>) => Promise<void>;
};