import { REST, Routes, Client, GatewayIntentBits, Collection } from 'discord.js';
import { GeneralCommands, GeneralCommandsJson } from './src/commands/command_handling.mjs';
import { GeneralEvents } from './src/events/event_handling.mjs';
import * as env from './src/env_data.mjs';

const rest = new REST({ version: '10' }).setToken(env.DISCORD_TOKEN);
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

client.commmands = new Collection();

for (const command of GeneralCommands) {
    client.commmands.set(command.data.name, command);
}

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(env.CLIENT_ID),
            { body: GeneralCommandsJson }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

for (const a of GeneralEvents) {
    if (a.once) {
        client.once(a.name, (...args) => a.execute(args));
    } else {
        client.on(a.name, (...args) => a.execute(args));
    }
}

client.login(env.DISCORD_TOKEN);
