import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    tech: z.array(z.string()),
    url: z.string().optional(),
    github: z.string().optional(),
    image: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    professional: z.boolean().default(false),
    company: z.string().optional(),
    order: z.number().default(0),
    status: z.enum(["Live", "Built", "In Progress", "Completed"]).default("Built"),
    buttons: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().optional(),
          style: z.enum(["primary", "secondary"]).default("primary"),
        })
      )
      .optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string().optional(),
    period: z.string(),
    type: z.string(),
    tech: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { projects, experience };
