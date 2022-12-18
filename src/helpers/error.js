import { currDir } from "./currentDir";

export const errorMsg = () => {
  if (error) {
    console.error('Operation failed')
  } else {
    currDir();
  }
}