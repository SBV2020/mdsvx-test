import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc"; // https://github.com/remarkjs/remark-toc/issues/30
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import remarkSmartypants from "remark-smartypants";
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks'
import {mdsvex} from "mdsvex";

// import { vitePreprocess } from "@sveltejs/kit/vite";


/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  // preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },

  /// filter out warning when build Svelte
  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) {
      return;
    }
    handler(warning);
  },

  extensions: [".svelte", ".md"], preprocess: [preprocess({
    postcss: true
  }), mdsvex({
    extensions: [".md"],
    highlight: false,
    rehypePlugins: [
      rehypeCodeTitles /// This one should be above code highlight as mention in the docs
      , [rehypePrettyCode, {theme: "light-plus",

      }]
      , rehypeSlug /// RemarkToc will add ID to heading
      , [rehypeAutolinkHeadings, {behavior: "wrap"}] /// Add anchor link on the heading. This one depend on rehypeSlug
    ],
  })]
};

export default config;
