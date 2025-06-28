import { parseMarkdownFile, getPostsInFolderSorted } from '$lib/utils';

export async function load({ params }) {
	return parseMarkdownFile(await import(`/src/content/text/${params.slug}.md?raw`), 'text');
}

import path from 'path';

export async function entries() {
	const posts = await getPostsInFolderSorted(import.meta.glob(`/src/content/projects/*.md`, { query: '?raw' }), 'projects');
	return posts.map(post => ({ slug: path.basename(post.path) }));
}