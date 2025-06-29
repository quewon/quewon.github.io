import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import md from 'markdown-it';
import iterator from 'markdown-it-for-inline';
import { compress } from 'eleventy-plugin-compress';
import youtubeEmbed from 'eleventy-plugin-youtube-embed';

export default function (config) {
    config.setLibrary("md", md({
            html: true
        }).use(iterator, 'figure_images', 'image', function (tokens, i) {
            const token = tokens[i];
            const html = `
                <figure>
                    <img src="${token.attrGet('src') || ''}" alt="${token.content || ''}">
                    <figcaption>${token.content}</figcaption>
                </figure>
            `;

            token.type = "html_inline";
            token.content = html;
        }).use(iterator, 'url_new_win', 'link_open', function (tokens, i) {
            const [attrName, href] = tokens[i].attrs.find(attr => attr[0] === 'href');
            if (href && (href.startsWith("https://") || href.startsWith("http://"))) {
                tokens[i].attrPush([ 'target', '_blank' ]);
                tokens[i].attrPush([ 'rel', 'noopener noreferrer' ]);
            }
        })
    )
    
    config.addPassthroughCopy("./public/static/");
    config.addWatchTarget("./public/static/");

    config.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp", "jpeg"],
        widths: [300, 600, 1800],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async"
            }
        }
    });
    config.addPlugin(youtubeEmbed, {
        modestBranding: true,
        lite: {
            responsive: true
        }
    });
    config.addPlugin(compress, {
        algorithm: 'brotli'
    });

    return {
        dir: {
            input: "public",
            includes: "../_includes",
            output: "_site"
        }
    };
};