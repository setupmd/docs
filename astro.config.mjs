import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.setup.md',
	trailingSlash: "never",
	integrations: [
		starlight({
			title: 'setup.md',
			social: {
				github: 'https://link.setup.md/repo',
				discord: 'https://link.setup.md/discord'
			},
			sidebar: [
				{
					label: 'Project Information',
					autogenerate: { directory: '/information/' },
				},
				{
					label: 'Enhancements',
					autogenerate: { directory: '/enhancements/' },
				},
				{
					label: 'Hosting Tips',
					autogenerate: { directory: '/hosting/' },
				},
				{
					label: 'Server Tools',
					autogenerate: { directory: '/tools/' },
				},
				{
					label: 'Server Troubleshooting',
					autogenerate: { directory: '/troubleshooting/' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
			],
		}),
	],
});