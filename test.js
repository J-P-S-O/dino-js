console.log('Deps check');
import chalk from "chalk";
import minimist from "minimist";
console.log("Importing files...");
process.on("error", function (e) {
    console.log(e.message);
    console.log("Dino exiting with " + chalk.red(1));
});
import gendir from "./src/gendir.js";
import help from "./src/help.js";
import start from "./src/start.js";
import thrown from "./src/thrown.js";
import touch from "./src/touch.js";
var app = {
    gendir: gendir,
    help: help,
    start: start,
    thrown: thrown,
    touch: touch,
    minimist: minimist
};
console.log("Process exited with code " + chalk.green("0"));
//# sourceMappingURL=test.js.map