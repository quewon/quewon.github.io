import { parseMarkdownFile } from '$lib/utils';

export async function load({ params }) {
    return parseMarkdownFile(await import(`/src/content/projects/${params.slug}.md?raw`), 'projects');
}