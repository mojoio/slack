import * as plugins from './slack.plugins';
import { IMessageOptions } from './slack.classes.slackmessage';

export class SlackAccount {
  private postUrl = 'https://slack.com/api/chat.postMessage';
  private updateUrl = 'https://slack.com/api/chat.update';
  private slackToken: string;
  constructor(slackTokenArg: string) {
    this.slackToken = slackTokenArg;
  }

  async sendMessage(messageOptionsArg: IMessageOptions, channelArg: string = 'status', tsArg?: string) {
    let requestBody: any = {
      channel: channelArg,
      attachments: [messageOptionsArg]
    }
    let postUrl = this.postUrl;
    if (tsArg) {
      requestBody = {
        ...requestBody,
        ts: tsArg
      }
      postUrl = this.updateUrl;
    }
    const response = await plugins.smartrequest.postJson(postUrl, {
      headers: {
        'Authorization': `Bearer ${this.slackToken}`
      },
      requestBody
    });
    return response;
  }
}
