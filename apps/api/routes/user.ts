import { publicProcedure, router } from '../trpc';
export const userRouter = router({
  userList: publicProcedure.query(() => {
    // [..]
    return ['Lol', 'user level router'];
  })
});
