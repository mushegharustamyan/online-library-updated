import pingRouter from "../routes/ping.js";
import authRouter from "../routes/auth.js";

export const configureApp = (app) => {
  app.use("/", pingRouter);
  app.use("/auth", authRouter);
};
