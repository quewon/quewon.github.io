import { parseMarkdownFile } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const postPaths = import.meta.glob('/src/content/text/*.md');
	
	const allPosts = await Promise.all(
		Object.entries(postPaths).map(async ([path, resolver]) => {
			const post = await import(path+'?raw');
			return {
				path: path.slice('/src/content'.length, -'.md'.length),
				post: parseMarkdownFile(post, 'text')
			}
		})
	)

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.post.metadata.date) - new Date(a.post.metadata.date);
	});

	return json(sortedPosts);
};