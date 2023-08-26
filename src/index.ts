import figlet from "figlet";
import { Command } from "commander";
import { openBrowserLink } from "./utils";

const LINEAR_CLIENT_ID = "bd287d9cf47c21c0548537c1d1a66766";
const SERVER_PORT = "1337";
const SERVER_URL = `http://localhost:${SERVER_PORT}`;
const LINEAR_AUTH_PAGE = `https://linear.app/oauth/authorize?response_type=code&client_id=${LINEAR_CLIENT_ID}&redirect_uri='${SERVER_URL}'&state=SECURE_RANDOM&scope=read`;

const program = new Command();
console.log(figlet.textSync("CLInear"));

program
  .version("1.0.0")
  .description("A CLI tool for managing linear")
  .option("-l, --ls  [user]", "List tickets assigned to a user (default, you)")
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
