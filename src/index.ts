#!/usr/bin/env node
process.title = "dino"
import chalk from "chalk"
console.log(chalk.yellow('This is beta software'))
import minimist from "minimist"
import genDir from "./gendir.js"
import showHelp from "./help.js"
import start from "./start.js"
let args = minimist(process.argv)
if (args._.length <= 2 || args.help == true) {
	showHelp(args);
}else{

if (process.argv[2] == "new"){
	genDir(args)
}
}
if (process.argv[2] == "start"){
	start(args)
}