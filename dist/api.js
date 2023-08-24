"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@linear/sdk");
/**
 * Singleton class to instantiate a linear client and provide some helpful
 * methods
 */
class LinearApi {
    // For now let's only support oAuth
    constructor(accessToken, oAuthKey) {
        let clientArgs = {
            accessToken: oAuthKey,
        };
        this.linearClient = new sdk_1.LinearClient(clientArgs);
    }
    getMyIssues() {
        return __awaiter(this, void 0, void 0, function* () {
            const me = yield this.linearClient.viewer;
            const myIssues = yield me.assignedIssues();
            if (myIssues.nodes.length) {
                myIssues.nodes.map((issue) => console.log(`${me.displayName} has issue: ${issue.title}`));
            }
            else {
                console.log(`${me.displayName} has no issues`);
            }
        });
    }
}
//# sourceMappingURL=api.js.map