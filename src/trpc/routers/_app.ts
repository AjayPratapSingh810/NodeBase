import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    await inngest.send({
      name: "test/hello.world",
      data: { email: "abc@mail.com" },
    });
    const userId = ctx.auth.user.id;
    return prisma.user.findMany({ where: { id: userId } });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
