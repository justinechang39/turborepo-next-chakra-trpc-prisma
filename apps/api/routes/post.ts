import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
export const postRouter = router({
  postCreate: publicProcedure
    .input(
      z.object({
        title: z.string()
      })
    )
    .mutation((opts) => {
      const { input } = opts;
      console.log(input);

      return input;
    }),
  postList: publicProcedure.query(() => {
    // ...
    return ['public', 'post level router'];
  })
});
