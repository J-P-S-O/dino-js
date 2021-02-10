
console.log('Deps check')

import chalk from "chalk"
import minimist from "minimist"

console.log("Importing files...")
process.on("uncaughtException",(e)=>{
	console.log(e.message)
	console.log("Dino exiting with "+chalk.red(1))
})
import gendir from "./src/gendir"
import help from "./src/help"
import start from "./src/start"
import thrown from "./src/thrown"
import touch from "./src/touch"

console.log("Process exited with code "+ chalk.green("0"))
