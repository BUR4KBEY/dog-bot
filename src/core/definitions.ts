import { VoiceStateUpdateEvent } from './../events/voiceStateUpdate';
import { IEvent } from "../utils/interfaces";
import { ReadyEvent } from "../events/ready";
import { DisconnectEvent } from "../events/disconnect";

/** Event definitions */
export const events: Array<IEvent> = [
    new ReadyEvent,
    new DisconnectEvent,
    new VoiceStateUpdateEvent
];