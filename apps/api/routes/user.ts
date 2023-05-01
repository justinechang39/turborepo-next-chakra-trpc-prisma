import { adminProcedure, router } from '../trpc';
export const userRouter = router({
  userList: adminProcedure.query(() => {
    // [..]
    return ['Lol', 'user level router'];
  })
});
