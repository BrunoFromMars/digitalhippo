import { PublicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: PublicProcedure.query(() => {
    return "hello world";
  }),
});

export type AppRouter = typeof appRouter;
