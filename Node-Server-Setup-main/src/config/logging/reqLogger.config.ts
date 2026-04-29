import { requestContext } from "../../context/requestContext.js";
import logger from "./logger.config.js";
import morgan from "morgan";

morgan.token("status", (_req, res) => {
  return res.statusCode?.toString();
});

morgan.token("method", (req) => req.method);
morgan.token("url", (req) => req.url);

const requestLogger = morgan((tokens, req, res) => {
  const store = requestContext.getStore();

  const message = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");

  logger.info(message, {
    type: "INBOUND_REQUEST",
    serviceName: "GSTReko-API",
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: Number(tokens.status(req, res)),
    responseTimeMs: Number(tokens["response-time"](req, res)),
    contentLength: tokens.res(req, res, "content-length"),
    timestamp: new Date().toISOString(),
    ...store,
  });

  return null;
});

export default requestLogger;
