import chalk from 'chalk'
import fs from 'fs'
export default function(args){

	let dir = args._[3]
	console.log(`Generating Dino app to ${chalk.bold(dir)}` )
	fs.mkdirSync(dir)
}
