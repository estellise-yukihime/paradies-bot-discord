import { ChatInputCommandInteraction, Events } from "discord.js";
import '../extension.mjs';
import type { Action } from "./types.mjs";

export const InteractionCreate: Action = {
    name: Events.InteractionCreate,
    async execute(args: unknown[]): Promise<void> {
        if (args[0] instanceof ChatInputCommandInteraction) {
            const interaction: ChatInputCommandInteraction = args[0];

            if (!interaction.isChatInputCommand()) {
                return;
            }

            const command = interaction.client.commmands.get(interaction.commandName);

            if (!command) {
                return;
            }

            try {
                await command.execute(interaction);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}