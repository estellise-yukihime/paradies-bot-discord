import * as dotenv from 'dotenv';

dotenv.config();

export const DISCORD_TOKEN = process.env?.DISCORD_TOKEN ?? '';
export const CLIENT_ID = process.env?.CLIENT_ID ?? '';
export const OPENAPI_API_TOKEN = process.env?.OPENAPI_API_TOKEN ?? '';