import pingRouter from "../routes/ping.js";

export const configureApp = (app) => {
  app.use("/", pingRouter);
};
