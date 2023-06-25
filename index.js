import { createInterface } from 'node:readline/promises';
import { sayHi, sayBye } from './src/utils/greeting.js';
import { currDir } from './src/utils/currentDir.js';
import { parseCommand } from './src/handlers/commandParser.js';
import { runCommand } from './src/handlers/commandHandler.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = async () => {
  await sayHi();
  await currDir();

  rl.prompt();

  rl.on('line', async (input) => {
    const trimmed = input.trim();
    const command = await parseCommand(trimmed);
    try {
      await runCommand(command);
    } catch (err) {
      console.log(err)
    }
    await currDir();
    rl.prompt();
  });

  rl.on('SIGINT', async () => {
    rl.close();
  });

  rl.on('close', async () => {
    await sayBye();
    process.exit(0);
  });
};

await app();
