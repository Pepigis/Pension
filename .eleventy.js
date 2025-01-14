module.exports = function(eleventyConfig) {
  // Kopírovat statické soubory (CSS, obrázky)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
 };