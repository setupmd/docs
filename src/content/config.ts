import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema'; 
import { pageThemeObsidianSchema } from 'starlight-theme-obsidian/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: pageThemeObsidianSchema.merge(topicSchema)
    })
  })
};