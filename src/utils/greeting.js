import { getUsername } from "./argsHelp.js";
import { BYE_MSG, THANK_MSG, WELCOME_MSG } from "../common/constants.js";
import { consoleColors } from "./consoleColors.js";

export const sayHi = async () => {
    const username = await getUsername();
    const welcomeMsg = `${WELCOME_MSG}, ${username}!`;
    const helpMsg = `Print 'help' to get a command list`
    console.log(consoleColors.yellow, welcomeMsg);
    console.log(helpMsg);
};

export const sayBye = async () => {
    const username = await getUsername();
    const byeMsg = `${THANK_MSG}, ${username}, ${BYE_MSG}`;

    console.log(consoleColors.yellow, byeMsg);
};


