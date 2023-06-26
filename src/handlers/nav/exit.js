import { sayBye } from "../../utils/greeting.js";

export const exit = async () => {
    await sayBye();
    process.exit(0);
};
