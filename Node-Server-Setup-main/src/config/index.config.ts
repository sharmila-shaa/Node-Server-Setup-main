import { config } from "dotenv";
config({ path: ".env" });

const CONFIG = process.env;

export default CONFIG;
