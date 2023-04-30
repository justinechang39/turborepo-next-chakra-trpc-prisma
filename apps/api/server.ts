import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './context';
import { AppRouter, appRouter } from './router';
require('dotenv').config();

const server = fastify({
  maxParamLength: 5000
});

server.register(cors, {
  // add your own production endpoints here endpoints here
  origin:
    process.env.ENV === 'development' ? ['http://localhost:3000', 'http://localhost:3001'] : []
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext }
});

(async () => {
  try {
    await server.listen({ port: 3002 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();

export type { AppRouter };
