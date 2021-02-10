import { IEvent } from "../utils/interfaces";
import { Client, ClientEvents } from "discord.js";
import { Loggers } from "../utils/loggers";

export class DisconnectEvent implements IEvent {
    name: keyof ClientEvents = "disconnect";

    onTriggered = (client: Client) => {
        Loggers.client("Disconnected!");
        client.destroy();
    }
}