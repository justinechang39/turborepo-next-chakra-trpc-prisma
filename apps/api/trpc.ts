import { initTRPC, TRPCError } from '@trpc/server';
const t = initTRPC.create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;

const isAdmin = middleware(async (opts) => {
  const { ctx } = opts;

  // check if user is admin
  const hasAdminPriviledges = true;
  if (!hasAdminPriviledges) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You are not authorized to perform this action'
    });
  }

  return opts.next({
    ctx: {}
  });
});

export const adminProcedure = publicProcedure.use(isAdmin);
