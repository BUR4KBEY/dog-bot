import { Client, ClientEvents, VoiceState } from 'discord.js';
import { IEvent } from "../utils/interfaces";
import { cache, config } from '../core/client';
import { Loggers } from '../utils/loggers';
import { Helper } from '../utils/helper';

export class VoiceStateUpdateEvent implements IEvent {
    name: keyof ClientEvents = "voiceStateUpdate";

    onTriggered = (client: Client, oldMember: VoiceState, newMember: VoiceState) => {
        if (oldMember.id === client.user?.id) {
            
            if (!newMember.channel) return cache.channel?.join().then(() => Loggers.client("Someone tried to disconnect me but don't worry I am here (:", true));
            else if (newMember.channelID != cache.channelId) {
                Helper.disconnectClient(client).then(() => Helper.findChannel(client));
            }
            else {
                /** Checking server deafen */
                if (newMember.serverDeaf) {
                    newMember.setDeaf(false).then(() => Loggers.client("Someone tried to deafen me but I can hear again :)", true));
                }

                /** Checking client's microphone */
                if (!newMember.selfMute) {
                    newMember.setSelfMute(true).then(() => Loggers.client("I muted myself."));
                }
            }
        }
        else if (oldMember.member?.user.bot || oldMember.id != config.id) return;
        else if (!newMember.channel) {
            Helper.disconnectClient(client);
            Loggers.client("I am disconnected from voice channel. Don't worry I always follow you :)", true);
        }
        else if (oldMember.channelID === newMember.channelID) return;
        else Helper.findChannel(client);
    };
}

