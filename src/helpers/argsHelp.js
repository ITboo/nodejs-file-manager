import { DEFAULT_USERNAME, USERNAME } from "../common/constants.js";

export const getUsername = async () => {
  let username;
  const argsList = process.argv.slice(2);
  const argument = `--${USERNAME}=`;

  argsList.forEach(arg => {
      if (arg.startsWith(argument)) {
          username = arg.slice(argument.length);
          if(!username){
            username = DEFAULT_USERNAME
          };
      };
  });
  return username;
};