const request = require("supertest");
const User = require("../models/user");
const mongoose = require("mongoose");
process.env.ENV = "test";
const app = require("../index");

let token = "";

const url = process.env.MONGO;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

beforeAll(async () => {
  await request(app)
    .post("/auth/signup")
    .send({ name: "testUser", email: "test@gmail.com", password: "test12345" });

  const result = await request(app).post("/auth/login").send({
    email: "test@gmail.com",
    password: "test12345",
  });

  token = result.body.token;
});

afterAll(async () => {
  await User.findOneAndDelete({ email: "test@gmail.com" });
  mongoose.disconnect();
});

describe("GET news data", () => {
  test("should fail due to unauthorized.", async () => {
    const result = await request(app).get("/news?search=ndtv").send();
    expect(result.statusCode).toBe(401);
  });

  test("should return data successfully.", async () => {
    const result = await request(app)
      .get("/news?search=ndtv")
      .set("Authorization", `Bearer ${token}`)
      .send();
    expect(result.statusCode).toBe(200);
  });
});
