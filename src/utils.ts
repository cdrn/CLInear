import { exec } from "child_process";
import * as os from "os";

export function openBrowserLink(url: string): void {
  if (os.platform() === "linux") {
    exec(`xdg-open '${url}'`);
  } else if (os.platform() === "darwin") {
    exec(`open '${url}'`);
  } else {
    console.log("Unsupported operating system.");
  }
}
