import * as plugins from './slack.plugins';
import { IMessageOptions } from './slack.classes.slackmessage';

export class Slackme {
  private baseUrl = 'https://hooks.slack.com/services/';
  private postRoute: string;
  constructor(postRouteArg: string) {
    this.postRoute = postRouteArg;
  }

  sendMessage(messageOptionsArg: IMessageOptions, channelArg: string = 'general') {
    plugins.smartrequest.post(`${this.baseUrl}${this.postRoute}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        channel: channelArg,
        attachments: [messageOptionsArg]
      }
    });
  }
}
