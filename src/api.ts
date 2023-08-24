import { LinearClient } from "@linear/sdk";

export interface LinearClientArgs {
  accessToken?: string;
  apiKey?: string;
}

/**
 * Singleton class to instantiate a linear client and provide some helpful
 * methods
 */
class LinearApi {
  linearClient: LinearClient;

  // For now let's only support oAuth
  constructor(accessToken?: String, oAuthKey?: string) {
    let clientArgs: LinearClientArgs = {
      accessToken: oAuthKey,
    };
    this.linearClient = new LinearClient(clientArgs);
  }

  public async getMyIssues() {
    const me = await this.linearClient.viewer;
    const myIssues = await me.assignedIssues();

    if (myIssues.nodes.length) {
      myIssues.nodes.map((issue) =>
        console.log(`${me.displayName} has issue: ${issue.title}`)
      );
    } else {
      console.log(`${me.displayName} has no issues`);
    }
  }
}
