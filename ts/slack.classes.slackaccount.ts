import * as plugins from './slack.plugins';
import { IMessageOptions } from './slack.classes.slackmessage';

export class SlackAccount {
  private postUrl = 'https://slack.com/api/chat.postMessage';
  private updateUrl = 'https://slack.com/api/chat.update';
  private slackToken: string;
  constructor(slackTokenArg: string) {
    this.slackToken = slackTokenArg;
  }

  async sendMessage(optionsArg: {
    messageOptions: IMessageOptions;
    channelArg: string;
    ts?: string;
    mode: 'new' | 'threaded' | 'update';
  }) {

    let requestBody: any = {
      channel: optionsArg.channelArg,
      text: optionsArg.messageOptions.text,
    };

    if (optionsArg.messageOptions.fields) {
      requestBody = {
        ...requestBody,
        attachments: [{
          pretext: optionsArg.messageOptions.pretext,
          fields: optionsArg.messageOptions.fields,
          ts: optionsArg.messageOptions.ts,
          color: optionsArg.messageOptions.color
        }]
      }
    }




    let postUrl = this.postUrl;

    switch (true) {
      case optionsArg.ts && optionsArg.mode === 'update':
        requestBody = {
          ...requestBody,
          ts: optionsArg.ts
        };
        postUrl = this.updateUrl;
        break;
      case optionsArg.ts && optionsArg.mode === 'threaded':
        requestBody = {
          ...requestBody,
          thread_ts: optionsArg.ts

        }
        break;
    }

    const response = await plugins.smartrequest.postJson(postUrl, {
      headers: {
        Authorization: `Bearer ${this.slackToken}`
      },
      requestBody
    });
    return response;
  }
}
