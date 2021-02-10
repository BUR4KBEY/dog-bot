import { client, config } from "./core/client";
import { Loggers } from './utils/loggers';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import events from 'events';

/** Clearing console */
clear();

/** Increasing maximum event listener counts */
events.EventEmitter.defaultMaxListeners = 20;

/** Console messages */
console.log(`${chalk.yellow.bold(figlet.textSync('DOGBOT', { font: 'Georgia11' }))}`);
Loggers.client("Preparing to starting...");

/** Running the discord client */
client.login(config.token);