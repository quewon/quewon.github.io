import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		prerender: {
			handleHttpError: 'warn'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;