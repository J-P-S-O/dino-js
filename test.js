console.log('Deps check');
import chalk from "chalk";
console.log("Importing files...");
process.on("uncaughtException", function (e) {
    console.log(e.message);
    console.log("Dino exiting with " + chalk.red(1));
});
console.log("Process exited with code" + chalk.green(0));
//# sourceMappingURL=test.js.map