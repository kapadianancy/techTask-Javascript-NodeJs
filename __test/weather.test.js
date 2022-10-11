const request = require("supertest");
process.env.ENV = "test";
const app = require("../index");

describe("GET weather data", () => {
  test("should return data successfully.", async () => {
    const result = await request(app).get("/weather").send();
    expect(result.statusCode).toBe(200);
    expect(result.body.count).toBe(5);
  });
});
