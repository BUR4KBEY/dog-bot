import { Client } from 'discord.js';
import { cache, config } from '../core/client';
import { Loggers } from './loggers';

export class Helper {

    /** Function for finding current connected channel */
    static findChannel(client: Client) {

        cache.channelId = null;
        cache.channel = null;
        Loggers.client("Trying to find your connected channel...", true);

        var finded = false;
        client.guilds.cache.forEach(guild => {
            if (finded) return;
            const member = guild.members.cache.find(user => user.id === config.id);
            if (!member) return;

            if (member.voice.channel) {
                finded = true;
                cache.channel = member.voice.channel;
                cache.channelId = member.voice.channelID;
                Loggers.client("Channel finded! Joining...");
                member.voice.channel.join().then(() => Loggers.client("Joined!"));
            }
        });

        if (!finded) Loggers.client("I couldn't find your connected channel. Please connect to an voice channel!");
    }

    /** Function for disconnecting the client from current connection */
    static disconnectClient(client: Client): Promise<void> {
        return new Promise((resolve) => {
            const connection = this.getConnection(client);
            if (!connection) return;
            cache.channelId = null;
            cache.channel = null;
            connection.disconnect();
            setTimeout(() => resolve(), 250);
        });
    }

    static getConnection(client: Client) {
        return client.voice?.connections.first();
    }
    
}