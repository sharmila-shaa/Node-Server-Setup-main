// import express from "express";
// import helmet from "helmet";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import reqLogger from "./config/logging/reqLogger.config.js";

// import requestIdAssigner from "./middleware/requestID.middleware.js";
// import setRequestContext from "./middleware/requestContext.middleware.js";

// import { errorHandler, notFoundHandler } from "./handlers/errors.handler.js";

// import indexRouter from "./routes/index.routes.js";
// import helloRoutes from "./routes/hello.routes";

// export const app = express();

// app.use(helmet());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// app.use(requestIdAssigner);
// app.use(setRequestContext);
// app.use(reqLogger);
// app.use(cookieParser());
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(indexRouter);
// app.use("/api", helloRoutes);

// app.use(notFoundHandler);

// app.use(errorHandler);

// export default app;
import express from "express";

import indexRouter from "./routes/index.routes";
import helloRoutes from "./routes/hello.routes";

const app = express();

app.use(express.json());

app.use("/api", indexRouter);
app.use("/api", helloRoutes);

export default app;
// app.use(indexRouter);

// app.use(notFoundHandler);

// app.use(errorHandler);