// import app from "./ server.js";
// import CONFIG from "./config/index.config.js";
// import logger from "./config/logging/logger.config.js";
// import { setupGracefulShutdown } from "./utils/shutdown.js";

// const server = app.listen(CONFIG.PORT, () => {
//   logger.debug(
//     ` ${CONFIG.SERVICE_NAME?.toUpperCase()} running on port ${CONFIG.PORT}`
//   );
// });

// setupGracefulShutdown(server);

import app from "./server.js";
import CONFIG from "./config/index.config.js";

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});