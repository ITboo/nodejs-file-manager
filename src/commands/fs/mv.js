import { cp } from "./cp.js"
import { remove } from "./rm.js"

export const mv = async (command) => {
    await cp(command);
    await remove(command);
}