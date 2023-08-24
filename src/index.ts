import figlet from "figlet";
import { Command } from "commander";
import { openBrowserLink } from "./utils";

const LINEAR_AUTH_PAGE =
  "https://linear.app/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=localhost:1337&state=SECURE_RANDOM&scope=read";

const program = new Command();
console.log(figlet.textSync("CLInear"));

program
  .version("1.0.0")
  .description("A CLI tool for managing linear")
  .option("-l, --ls  [value]", "List tickets assigned to a user (default, you)")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

if (options.ls) {
  listTickets(options.ls);
}

function listTickets(user?: string) {
  console.log("Listing tickets...");
  checkConfig();
}

function checkConfig() {
  const oAuthKey = process.env.LINEAR_OAUTH_KEY;
  if (!oAuthKey) {
    console.log("OAuth key not set. Opening Linear...");
    openBrowserLink(LINEAR_AUTH_PAGE);
  }
}
