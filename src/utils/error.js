import { consoleColors } from "./consoleColors.js";

export const errorMsg = () => {
    console.error(consoleColors.red, 'Operation failed');
}