import chalk from 'chalk';

export class Loggers {
    
    /** Logger for client processes */
    static client(message: string, newLine: boolean = false) {
        console.log(`${newLine ? "\n" : ""}${chalk.cyanBright("[Bot]")} ${message}`);
    }

}