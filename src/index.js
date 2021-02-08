#!/usr/bin/env node
process.title = "dino"
import chalk from "chalk"
console.log(chalk.yellow('This is beta software'))
import minimist from "minimist"
import genDir from "./gendir.js"
import showHelp from "./help.js"
let args = minimist(process.argv)
if (args._.length <= 2 || args.help == true) showHelp(args);


if ( args._[3] == "new"){
	genDir(args)
}
