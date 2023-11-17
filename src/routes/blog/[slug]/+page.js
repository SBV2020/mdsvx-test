export async function load({params}) {
    const post = await import("../" + 1 + ".md"); //// BEWARE: Using backtick won't work. It will return 404 for no reason.
    const {title, date, categories} = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date, categories
    };
}
