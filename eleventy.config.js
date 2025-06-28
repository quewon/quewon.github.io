import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import md from 'markdown-it';
import iterator from 'markdown-it-for-inline';
import { compress } from 'eleventy-plugin-compress';

export default function (config) {
    config.setLibrary("md", md({
            html: true
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