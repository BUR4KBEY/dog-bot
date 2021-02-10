import { Client, ClientEvents } from 'discord.js';
import { Helper } from '../utils/helper';
import { IEvent } from "../utils/interfaces";
import { Loggers } from '../utils/loggers';

export class ReadyEvent implements IEvent {
    name: keyof ClientEvents = "ready";

    onTriggered = (client: Client) => {
        Loggers.client("Started!");

        /** Trying to find your connected channel */
        Helper.findChannel(client);
    };
}