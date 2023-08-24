"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const utils_1 = require("./utils");
const LINEAR_AUTH_PAGE = "https://linear.app/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URL&state=SECURE_RANDOM&scope=read";
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("CLInear"));
program
    .version("1.0.0")
    .description("A CLI tool for managing linear")
    .option("-l, --ls  [value]", "List tickets assigned to a user (default, you)")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);
const options = program.opts();
if (options.ls) {
    listTickets();
}
function listTickets() {
    console.log("Listing tickets...");
    checkConfig();
}
function checkConfig() {
    const oAuthKey = process.env.LINEAR_OAUTH_KEY;
    if (!oAuthKey) {
        console.log("OAuth key not set. Opening Linear...");
        (0, utils_1.openBrowserLink)(LINEAR_AUTH_PAGE);
    }
}
//# sourceMappingURL=index.js.map