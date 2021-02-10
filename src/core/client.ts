import { ICache } from './../utils/interfaces';
import { Client } from "discord.js";
import { events } from "./definitions";
import { handleEvents } from "./handlers";

/** The client */
export const client = new Client();

/** Cache (Don't touch) */
export var cache: ICache = {
    channel: null,
    channelId: null
};

/** Config */
export const config = {
    token: "Bot Token",
    id: "Your Discord ID"
};

/** Handling the events */
handleEvents(client, events);