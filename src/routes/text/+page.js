import { getPostsInFolderSorted } from '$lib/utils';
export const load = async () => {
	return {
		posts: await getPostsInFolderSorted(import.meta.glob(`/src/content/text/*.md`, { query: '?raw' }), 'text')
	};
};