import { exec } from "child_process";
import { platform } from "os";

export function openBrowserLink(url: string): void {
  if (platform() === "linux") {
    exec(`xdg-open ${url}`);
  } else if (platform() === "darwin") {
    exec(`open ${url}`);
  } else {
    console.log("Unsupported operating system.");
  }
}
