import request from "supertest";
import app from "../../index.js";

it("GET /ping", async () => {
  return request(app).get("/ping").expect(200);
});
