import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as readline from "readline";

// File name for config
const CONFIG_FILE = ".yourtoolconfig";

// Configuration data interface
interface ConfigData {
  linearClientId: string;
}

// Retrieve Linear client ID from the configuration file
function getLinearClientID(): string | null {
  const configPath = path.join(os.homedir(), CONFIG_FILE);

  if (fs.existsSync(configPath)) {
    const configData: ConfigData = JSON.parse(
      fs.readFileSync(configPath, "utf-8")
    );
    return configData.linearClientId;
  }

  return null;
}

// Save Linear client ID to the configuration file
function saveLinearClientID(clientId: string): void {
  const configPath = path.join(os.homedir(), CONFIG_FILE);
  const configData: ConfigData = { linearClientId: clientId };

  fs.writeFileSync(configPath, JSON.stringify(configData), "utf-8");
  console.log("Linear client ID saved.");
}
