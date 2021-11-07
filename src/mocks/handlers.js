import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        username,
        token: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
      })
    );
  }),
  rest.post("/register", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        username,
        token: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
      })
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.json({
        username: "Jan Kowalski",
        token: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
      })
    );
  }),
];
