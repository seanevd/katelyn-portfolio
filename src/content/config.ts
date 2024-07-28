import { defineCollection, z } from 'astro:content';
import { SITE_TAGS } from '../consts';

const projects = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		order: z.number(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		summary: z.string(),
		tags: z.array(z.enum(SITE_TAGS as [string])),
		companyImages: z.array(z.string()).optional(),
		compactHero: z.boolean().optional()
	}),
});

export const collections = { projects };