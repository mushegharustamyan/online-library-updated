import request from "supertest";
import { app } from "../../index.js";

it("GET /ping", async () => {
  const response = await request(app).get("/ping");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("pong");
});
