import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { pageThemeObsidianSchema } from 'starlight-theme-obsidian/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema';

const docs = defineCollection({
  schema: docsSchema({
    extend: pageThemeObsidianSchema.merge(topicSchema),
  }),
});

export const collections = { docs };