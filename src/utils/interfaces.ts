import { ClientEvents, VoiceChannel } from "discord.js";

/** Interface for events */
export interface IEvent {
    /** Name of the event */
    name: keyof ClientEvents; 
    /** Initializing the function when event triggered */
    onTriggered(...any: any): void;
}

/** Interface for cache */
export interface ICache {
    channelId: string | null;
    channel: VoiceChannel | null;
}