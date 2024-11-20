import pingRouter from "../routes/ping.js";
import authRouter from "../routes/auth.js";
import bookRouter from "../routes/book.js";
import authorRouter from "../routes/authors.js";
import ratingRouter from "../routes/ratings.js"

export const configureApp = (app) => {
  app.use("/", pingRouter);
  app.use("/auth", authRouter);
  app.use("/books", bookRouter);
  app.use("/authors", authorRouter);
  app.use("book/:id/rate", ratingRouter)
};
