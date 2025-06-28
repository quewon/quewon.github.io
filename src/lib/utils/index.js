import { marked } from 'marked';

export const parseMarkdownFile = (file, folder) => {
	var content = file.default;

	var metadata = {};
	if (content.substring(0, 3) == "---") {
		const metadataString = content.split("---")[1].trim();

		for (let pair of metadataString.split("\n")) {
			const key = pair.split(":")[0];
			const value = pair.slice(key.length + 1).trim();
			metadata[key] = value;
		}

		content = content.split("---").slice(2).join("---").trim();
	}

	const renderer = new marked.Renderer();
	renderer.image = function(props) {
		var { href, title, text } = props;

		if (!href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#')) {
			const image = href.split(".").slice(0, -1).join(".");

			href = `/src/content/${folder}/${href}`;

			return `
				<picture>
					<source type="image/webp" srcset="/src/content/${folder}/responsive-media/${image}.webp" media="(min-width: 640px)">
					<source type="image/webp" srcset="/src/content/${folder}/responsive-media/${image}-640.webp" media="(min-width: 320px)">
					<source type="image/webp" srcset="/src/content/${folder}/responsive-media/${image}-320.webp">
					<source srcset="/src/content/${folder}/responsive-media/${image}.jpg" media="(min-width: 640px)">
					<source srcset="/src/content/${folder}/responsive-media/${image}-640.jpg" media="(min-width: 320px)">
					<source srcset="/src/content/${folder}/responsive-media/${image}-320.jpg">
					<img alt="${text}" src="${href}">
				</picture>
			`;
		}

		return `<img alt="${text}" src="${href}">`;
	};

	content = marked(content, { renderer });

	return {
		metadata,
		content
	};
}