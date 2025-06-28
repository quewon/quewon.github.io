export const load = async ({ fetch }) => {
	const response = await fetch('/projects/api');
	return { posts: await response.json() };
};