import { TaskStatus } from "@prisma/client";
import { z } from "zod";

export const todoValidator = z.object({
  title: z.string(),
  status: z
    .enum([TaskStatus.PENDING, TaskStatus.TODO, TaskStatus.DONE])
    .optional(),
});
