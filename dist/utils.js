"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBrowserLink = void 0;
const child_process_1 = require("child_process");
const os_1 = require("os");
function openBrowserLink(url) {
    if ((0, os_1.platform)() === "linux") {
        (0, child_process_1.exec)(`xdg-open ${url}`);
    }
    else if ((0, os_1.platform)() === "darwin") {
        (0, child_process_1.exec)(`open ${url}`);
    }
    else {
        console.log("Unsupported operating system.");
    }
}
exports.openBrowserLink = openBrowserLink;
//# sourceMappingURL=utils.js.map