import chalk from 'chalk';
export default function (args) {
    var help = "\n\t" + chalk.bold("new") + " <dir> : Create app from template to <dir>\n\n\t" + chalk.bold("start") + " <dir>: Start app in <dir> or current folder\n\n\tTo get help for a command, run Dino <command> --help\n";
    var helpstart = "\n\tUsage: dino start [<dir>] [switches]\n\n\tAvailable switches:\n\t\t--port, -p: Set Dino's port. Defaults to " + chalk.blue(3000) + "\n\t\t--no-error: Do not display errors in the HTTP response. Default: " + chalk.red(false) + ".\n\t\t--bind: Host to which Dino should bind. Default: localhost\n\t\t--cert: Certificate path. If none is provided, Dino runs on HTTP (" + chalk.red("non-secure!") + ").\n\t\t--key: Your " + chalk.green("SSL") + " key. Required if you run with the " + chalk.bold("--cert") + " key.\n\n";
    if (args._.length <= 2) {
        console.log(help);
    }
    else {
        var command = args._[2].toLowerCase();
        if (command == 'start') {
            console.log(helpstart);
            process.exit(0);
        }
        console.log("No help available for " + chalk.bold(command));
        process.exit(0);
    }
}
//# sourceMappingURL=help.js.map