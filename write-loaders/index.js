module.exports = function(content) {
    console.log('we are preprocess assets content with\n', content);
    let newContent = `${content}; console.log("author by slashhuang")`;
    return newContent
};