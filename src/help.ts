import chalk from "chalk";
export default function (args) {
  let help = `
	${chalk.bold("new")} <dir> : Create app from template to <dir>

	${chalk.bold("start")} <dir>: Start app in <dir> or current folder

	To get help for a command, run Dino <command> --help
`;
  let helpstart = `
	Usage: dino start [<dir>] [switches]

	Available switches:
		--port, -p: Set Dino's port. Defaults to ${chalk.blue(3000)}
		--no-error: Do not display errors in the HTTP response. Default: ${chalk.red(
      false
    )}.
		--bind: Host to which Dino should bind. Default: localhost
		--cert: Certificate path. If none is provided, Dino runs on HTTP (${chalk.red(
      "non-secure!"
    )}).
		--key: Your ${chalk.green(
      "SSL"
    )} key. Required if you run with the ${chalk.bold("--cert")} key.

`;
  if (args._.length <= 2) {
    console.log(help);
  } else {
    const command = args._[2].toLowerCase();
    if (command == "start") {
      console.log(helpstart);

      process.exit(0);
    }
    console.log("No help available for " + chalk.bold(command));
    process.exit(0);
  }
}
