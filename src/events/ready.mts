import { Client, Events } from "discord.js";
import type { Action } from "./types.mjs";

export const Ready: Action = {
    name: Events.ClientReady,
    once: true,
    execute(args: unknown[]): void {
        const client = args[0];

        if (client instanceof Client<true>) {
            console.log(`Logged in as ${client.user?.tag}!`);
        }
    }
}