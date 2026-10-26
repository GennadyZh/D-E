/// <reference types="astro/client" />

type MarkdownFrontmatter = Record<string, string | undefined> & {
	title?: string;
	description?: string;
	lead?: string;
	heroTitle?: string;
	heroLead?: string;
};

declare module '*.md' {
	import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

	export const frontmatter: MarkdownFrontmatter;
	export const file: string;
	export const url: string | undefined;
	export const Content: AstroComponentFactory;
	export function getHeadings(): { depth: number; slug: string; text: string }[];
	const module: {
		frontmatter: MarkdownFrontmatter;
		file: string;
		url: string | undefined;
		Content: AstroComponentFactory;
		getHeadings: () => { depth: number; slug: string; text: string }[];
	};
	export default module;
}
