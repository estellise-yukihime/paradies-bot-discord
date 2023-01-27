import * as dotenv from 'dotenv';
import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import type { DiscordAPIError } from 'discord.js';
import { Commands, GeneralCommands } from './src/commands.mjs';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const DISCORD_TOKEN = process.env?.DISCORD_TOKEN ?? '';
const CLIENT_ID = process.env?.CLIENT_ID ?? '';
const OPENAI_API_KEY = process.env?.OPENAI_API_KEY ?? '';

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

const openaiConfiguration = new Configuration({
    apiKey: OPENAI_API_KEY
});
const openai = new OpenAIApi(openaiConfiguration);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: GeneralCommands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

// client.on('interactionCreate', async (interaction) => {
//     if (!interaction.isChatInputCommand()) {
//         return;
//     }

//     console.log(interaction);

//     if (interaction.commandName === Commands.qoutes.depressing.name) {
//         try {
//             await interaction.reply('Pong!');
//         }
//         catch (error: DiscordAPIError | unknown) {
//             console.log(error);
//         }
//     }
// });

client.on('message', (message) => {
    console.log(message);
});

client.login(DISCORD_TOKEN);
