export default function() {
    return {
        eleventyComputed: {
            title: data => data.title || data.slug || data.page.filePathStem.split("/").pop(),
            permalink: data => data.redirect || data.draft ? false : "",
            eleventyExcludeFromCollections: data => !!data.draft
        }
    }
}