import * as request from "supertest";
import app from "../src/App";

describe('Videos#index', () => {
  it('It should response the GET method', () => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200);
    })
  });
})
