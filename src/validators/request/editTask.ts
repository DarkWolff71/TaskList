import { TaskStatus } from "@prisma/client";
import { z } from "zod";

export const editTaskRequestValidator = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  status: z
    .enum([TaskStatus.IN_PROGRESS, TaskStatus.TODO, TaskStatus.DONE])
    .optional(),
});
