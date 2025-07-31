import markdownIt from "markdown-it";
const md = markdownIt();
export const markdownify = (content) => md.render(content);

export default async function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.njk");

  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("markdownify", markdownify);
}

export const config = {
  markdownTemplateEngine: "njk",
};
