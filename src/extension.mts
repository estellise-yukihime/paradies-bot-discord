import { Collection } from "discord.js";
import { CommandData } from "./commands/command_types.mjs";

declare module "discord.js" {
    export interface Client {
        commmands: Collection<string, CommandData>;
    }
}