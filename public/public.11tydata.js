export default function() {
    return {
        eleventyComputed: {
            title: data => data.title || data.page.filePathStem.split("/").pop(),
        }
    }
}