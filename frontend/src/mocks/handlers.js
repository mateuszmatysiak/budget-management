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
  rest.get("/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          name: "Kotlet schabowy",
          price: "15.21",
          category: "ECONOMIC",
        },
        {
          id: "2",
          name: "Telewizor",
          price: "4999.99",
          category: "ELECTRONIC",
        },
        {
          id: "3",
          name: "Płyn do mycia naczyń",
          price: "9.99",
          category: "HOMEMADE",
        },
      ])
    );
  }),
];
