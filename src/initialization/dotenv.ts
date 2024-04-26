import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({
  path: resolve(__dirname,  'config',(process.env.NODE_ENV ?? "dev") + ".env"),
});

export const config = {
  get: <T>(key: string): T => {
    return process.env[key] as T;
  },
};
