import winston from "winston";
import CONFIG from "../index.config.js";

const isDev = CONFIG.NODE_ENV === "development";

const { colorize, combine, errors, printf, json, timestamp } = winston.format;
const { Console, File } = winston.transports;

const PROD_TRANSPORT = new Console({
  level: "debug",
  format: combine(
    colorize(),
    printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
    )
  ),
});

const CONSOLE_TRANSPORT = new Console({
  level: "info",
  format: combine(
    colorize(),
    printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
    )
  ),
});

const LOCAL_LOG_FILE_TRANSPORT = new File({
  filename: "logs/application.log",
  format: json(),
});

const transports = isDev
  ? [CONSOLE_TRANSPORT, LOCAL_LOG_FILE_TRANSPORT]
  : [PROD_TRANSPORT];

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    json()
  ),
  transports: transports,
});

export default logger;
