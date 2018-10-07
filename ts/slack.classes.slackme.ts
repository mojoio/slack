import * as plugins from './slack.plugins';
import { IMessageOptions } from './slack.classes.slackmessage';

export class Slackme {
  private baseUrl = 'https://hooks.slack.com/services/';
  private postRoute: string;
  constructor(postRouteArg: string) {
    this.postRoute = postRouteArg;
  }

  sendMessage(messageOptionsArg: IMessageOptions, channelArg: string = 'general') {
    plugins.smartrequest.postJson(`${this.baseUrl}${this.postRoute}`, {
      requestBody: {
        channel: channelArg,
        attachments: [messageOptionsArg]
      }
    });
  }
}
