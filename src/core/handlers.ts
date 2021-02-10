import { IEvent } from './../utils/interfaces';
import { Client } from 'discord.js';

/** Event handler */
export function handleEvents(client: Client, events: Array<IEvent>): void {
    events.forEach(event => client.on(event.name, event.onTriggered.bind(null, client)));
}