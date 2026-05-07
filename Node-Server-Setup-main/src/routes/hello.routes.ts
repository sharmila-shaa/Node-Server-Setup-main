// import express from "express";
// import { getHello } from "../controller/hello.controller";

// const router = express.Router();

// // GET /hello
// router.get("/hello", getHello);

// export default router;
import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({
    success: true,
    message: "Hello World "
  });
});

export default router;