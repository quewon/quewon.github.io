export const load = async ({ fetch }) => {
	const response = await fetch('/text/api');
	return { posts: await response.json() };
};