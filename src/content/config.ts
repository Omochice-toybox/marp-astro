import { defineCollection, z } from "astro:content";

const slideCollection = defineCollection({
  type: "content",
  schema: z.object({
    marp: z.optional(z.boolean()),
    paginate: z.optional(z.boolean()),
    summary: z.optional(z.string()),
    draft: z.optional(z.boolean()),
  }),
});

export const collections = {
  slides: slideCollection,
};
