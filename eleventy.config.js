import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import md from 'markdown-it';
import iterator from 'markdown-it-for-inline';

export default function (config) {
    config.addPassthroughCopy("./public/static/");
    config.addWatchTarget("./public/static/");

    config.setLibrary("md", md({
            html: true
        }).use(iterator, 'figure_image', 'image', function (tokens, i) {
            const token = tokens[i];
            var img = `<img src="${token.attrGet('src') || ''}" alt="${token.content || ''}">`;
            if (tokens.length > 1) {
                const link = tokens[i + 1];
                img = `<a href="${link.content.slice(1, -1)}">${img}</a>`;
                link.content = "";
            }
            token.type = "html_inline";
            token.content = `
                <figure>
                    ${img}
                    <figcaption>${token.content}</figcaption>
                </figure>
            `;;
        }).use(iterator, 'url_new_win', 'link_open', function (tokens, i) {
            const [attrName, href] = tokens[i].attrs.find(attr => attr[0] === 'href');
            if (href && (href.startsWith("https://") || href.startsWith("http://"))) {
                tokens[i].attrPush([ 'target', '_blank' ]);
                tokens[i].attrPush([ 'rel', 'noopener noreferrer' ]);
            }
        })
    )

    config.addFilter("getPage", (arr, url) => {
        return arr.find(item => item.url == url || item.url == url + "/");
    });

    config.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp", "png"],
        widths: [1800, 1000, 600],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async"
            }
        }
    });

    return {
        dir: {
            input: "public",
            includes: "../_includes",
            output: "_site"
        }
    };
};