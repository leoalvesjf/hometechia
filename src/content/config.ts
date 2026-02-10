import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.string(),
		image: z.string().optional(),
		badge: z.string().optional(),
	}),
});

export const collections = { noticias };
