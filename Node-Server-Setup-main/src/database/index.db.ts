import CONFIG from "../config/index.config.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import logger from "../config/logging/logger.config.js";

const { DATABASE_URL, NODE_ENV } = CONFIG;

const adapter = new PrismaPg({ connectionString: DATABASE_URL });
const prisma = new PrismaClient({ adapter });

prisma
  .$connect()
  .then(() => {
    logger.info(
      `Connected to ${(NODE_ENV || "").toUpperCase()} Neon database `
    );
  })
  .catch((error: Error) => {
    logger.error("Error connecting to the database:", error);
  });

export default prisma;
