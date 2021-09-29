import { rest } from "msw";
import { repos } from "./data";

export const handlers = [
  rest.post("/.netlify/functions/user_repos", (req, res, ctx) => {
    const { username }: any = req.body;
    return res(ctx.json(repos.filter((repo) => repo.owner === username)));
  }),

  rest.post("/.netlify/functions/repo_readme", (_req, res, ctx) => {
    return res(
      ctx.json(`
      ## test data
      ### test info 
    `)
    );
  }),
];
