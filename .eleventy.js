const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Static files/folders copied as-is into the built site
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  // Human-friendly date filter, e.g. "July 18, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toFormat(
      "LLLL d, yyyy"
    );
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
