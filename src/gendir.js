import chalk from 'chalk'
import fs from 'fs'

import touch from './touch.js'
export default function(args){

	let dir = args._[3]
	console.log(`Generating Dino app to ${chalk.bold(dir)}` )
	try{
	fs.mkdirSync(dir)
	process.chdir(dir)
	touch.json("package.json", {
	title: "dino-app",
	version: "0.0.0",
	description:" A tiny Dino app",
	main: "index.js",
	scripts: {
	start: "dino start"
	},
	dependencies: {
		"dino-js": "^0.0.6"
	} 
		
	})
	

}catch(e){
	if (e.code == "EEXIST"){
		console.log("Path already exists");
		process.exit(1)
	}
}
	


}
