import {
  BrakesType,
  EngineType,
  SuspensionType,
  TransmissionType,
  TyresType,
} from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const vehicleRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.vehicle.findFirst({
      where: {
        id: input,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.vehicle.findMany({
      orderBy: [
        {
          sold: "asc",
        },
        {
          price: "desc",
        },
      ],
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        imageUrl: z.string(),
        engine: z.nativeEnum(EngineType),
        transmission: z.nativeEnum(TransmissionType),
        brakes: z.nativeEnum(BrakesType),
        suspension: z.nativeEnum(SuspensionType),
        tyres: z.nativeEnum(TyresType),
        turbine: z.boolean(),
        airSuspension: z.boolean(),
        armor: z.boolean(),
        xenon: z.boolean(),
        radio: z.boolean(),
        sold: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.vehicle.create({
        data: input,
      });
    }),

  updateIsSold: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        sold: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.vehicle.update({
        where: {
          id: input.id,
        },
        data: {
          sold: input.sold,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        price: z.number(),
        imageUrl: z.string(),
        engine: z.nativeEnum(EngineType),
        transmission: z.nativeEnum(TransmissionType),
        brakes: z.nativeEnum(BrakesType),
        suspension: z.nativeEnum(SuspensionType),
        tyres: z.nativeEnum(TyresType),
        turbine: z.boolean(),
        airSuspension: z.boolean(),
        armor: z.boolean(),
        xenon: z.boolean(),
        radio: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.vehicle.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          price: input.price,
          imageUrl: input.imageUrl,
          engine: input.engine,
          transmission: input.transmission,
          brakes: input.brakes,
          suspension: input.suspension,
          tyres: input.tyres,
          turbine: input.turbine,
          airSuspension: input.airSuspension,
          armor: input.armor,
          xenon: input.xenon,
          radio: input.radio,
        },
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.vehicle.delete({
      where: {
        id: input,
      },
    });
  }),
});
