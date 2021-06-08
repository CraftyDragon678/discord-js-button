import { MessageButton } from 'discord.js';
import client from './client';
import config from './config';

client.on('message', async (message) => {
  if (message.content !== 'button-test') return;

  const m = await message.reply('test', {
    components: [
      {
        type: 'ACTION_ROW',
        components: [
          {
            type: 'BUTTON',
            customID: 'button',
            label: 'this is button',
            style: 'SUCCESS',
          },
        ],
      },
    ],
  });
  const interaction = await m.awaitMessageComponentInteractions(
    (i) => i.customID === 'button',
    { time: 3000, max: 1 }
  );
  interaction.first()?.reply('good~', { ephemeral: true });
});

client.on('ready', () => console.log('login!'));

client.login(config.token);
