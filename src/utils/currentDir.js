import { consoleColors } from "./consoleColors.js";

export const currDir = async () => {
  console.log(consoleColors.cyan, `You are currently in ${process.cwd()}`)
};