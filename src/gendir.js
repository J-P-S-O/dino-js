import chalk from 'chalk';
import fs from 'fs';
import { spawn } from "child_process";
import touch from './touch.js';
import thrown from "./thrown.js";
export default function (args) {
    var dir = args._[3] || thrown("No directory.", undefined);
    console.log("Generating Dino app to " + chalk.bold(dir));
    try {
        fs.mkdirSync(dir);
        process.chdir(dir);
        touch.json("package.json", {
            title: dir.toLowerCase(),
            version: "0.0.0",
            description: " A tiny Dino app",
            main: "index.js",
            scripts: {
                start: "dino start"
            },
            dependencies: {
                "dino-js": "^0.0.6"
            }
        });
        console.log("Fetching deps");
        var npm = spawn("npm", ["i"]);
        if (!npm)
            throw new Error("Couldn't spawn npm");
        npm.stdout.on('data', function (data) {
            console.log("" + data);
        });
        npm.on('close', function (code) {
            console.log("Npm exited with " + code);
            process.exit(code);
        });
        npm.on('exit', function (code) {
            console.log("child process exited with code " + code);
            process.exit(code);
        });
        npm.stderr.on('data', function (data) {
            console.error(data);
        });
        while (true) { }
    }
    catch (e) {
        if (e.code == "EEXIST") {
            console.log("Path already exists");
            process.exit(1);
        }
    }
}
//# sourceMappingURL=gendir.js.map