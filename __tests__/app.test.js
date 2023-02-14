import request from "supertest";
import app from "../src/app";

jest.useRealTimers();

describe("GET /user/check", () => {
  it("should return ok!", async () => {
    console.log(`app.handler: `,app.handler);
    const response = await request(app.handler).get("/user/check").send();
    expect(response.statusCode).toBe(200);
  });
});

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});
