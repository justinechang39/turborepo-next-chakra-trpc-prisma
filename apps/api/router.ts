import { publicProcedure, router } from './trpc';

export const appRouter = router({
  list: publicProcedure.query(() => {
    console.log('running');

    // [..]
    return ['lol', 'top level router'];
  })
});

export type AppRouter = typeof appRouter;
