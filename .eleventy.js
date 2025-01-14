module.exports = function(eleventyConfig) {
    // Kopírování CSS a obrázků do výstupní složky
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    return {
      dir: {
        input: "src",
        output: "dist", // Výstupní složka
      }
    };
   };