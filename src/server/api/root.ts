import { vehicleRouter } from "./routers/vehicles";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  vehicles: vehicleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
