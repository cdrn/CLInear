"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
// File name for config
const CONFIG_FILE = ".yourtoolconfig";
// Retrieve Linear client ID from the configuration file
function getLinearClientID() {
    const configPath = path.join(os.homedir(), CONFIG_FILE);
    if (fs.existsSync(configPath)) {
        const configData = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        return configData.linearClientId;
    }
    return null;
}
// Save Linear client ID to the configuration file
function saveLinearClientID(clientId) {
    const configPath = path.join(os.homedir(), CONFIG_FILE);
    const configData = { linearClientId: clientId };
    fs.writeFileSync(configPath, JSON.stringify(configData), "utf-8");
    console.log("Linear client ID saved.");
}
//# sourceMappingURL=config.js.map