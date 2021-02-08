#!/usr/bin/env node
process.title = "dino"
if (args._.length == 2) showHelp();
console.log(chalk.yellow('This is beta software'))
import chalk from "chalk"
import minimist from "minimist"
import genDir from "./gendir.js"
import showHelp from "./help.js"
let args = minimist(process.argv)
let m = "node" == process.argv[0] ? 1 : 0
if ( args._[2+m] == "new"){
	genDir(args)
}
