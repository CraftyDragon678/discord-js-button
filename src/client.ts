import { Client } from 'discord.js';

const client = new Client({
  intents: ['GUILD_MESSAGES', 'GUILDS'],
});

export default client;
