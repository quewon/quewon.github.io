import { parseMarkdownFile } from '$lib/utils';

export async function load({ params }) {
	return parseMarkdownFile(await import(`/src/content/text/${params.slug}.md?raw`), 'text');
}