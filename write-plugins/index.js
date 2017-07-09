class consolePlugin {
    apply(compiler) {
        compiler.plugin('compilation', function(compilation, callback) {
            console.log("we are compiling assets --------\n\n\n");
            // Invokes webpack provided callback after functionality is complete.
        });
    }
}
module.exports = consolePlugin;