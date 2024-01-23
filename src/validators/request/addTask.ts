import { TaskStatus } from "@prisma/client";
import { z } from "zod";

export const addTaskRequestValidator = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: z.enum([TaskStatus.IN_PROGRESS, TaskStatus.TODO, TaskStatus.DONE]),
});
