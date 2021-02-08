import chalk from "chalk"
import fs from "fs"
import { spawn } from "child_process"
console.log(chalk.green("About to install dino"))
let pdir = process.cwd()
let ddir = process.env.ProgramFiles + "\\dino"
console.log(chalk.yellow("Requires Node.js 12+ and Git"))
if (!fs.existsSync(ddir)){
    fs.mkdirSync(ddir);
    process.chdir(ddir);
    let git = spawn("git","clone", "https://github.com/j-p-s-o/dino-js/tree/latest", ".")
    
   git.stdout.on('data', (data) => {
  console.log(`${data}`);
});

git.stderr.on('data', (data) => {
  console.error(`${data}`);
});

git.on('close', (code) => {
  console.log(chalk.green(`Git exited with code ${code}`));
  
process.env.PATH = ddir +";"+process.env.PATH

});
	
}