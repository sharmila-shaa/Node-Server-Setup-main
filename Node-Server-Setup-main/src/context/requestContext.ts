import { AsyncLocalStorage } from "node:async_hooks";

interface REQUEST_CONTEXT {
  request_id: string;
  user_id?: number;
  request_ip: string;
}

export const requestContext = new AsyncLocalStorage<REQUEST_CONTEXT>();
