import * as plugins from './slack.plugins';
import { SlackAccount } from './slack.classes.slackaccount';

export interface IAttachmentField {
  title: string;
  value: string;
  short?: boolean;
}

export interface IMessageOptions {
  /**
   * "Required plain-text summary of the attachment."
   */
  fallback?: string;
  /**
   * a side color
   */
  color?: string;
  /**
   * a message to show above
   */
  pretext?: string;
  /**
   * author name of the attachment
   */
  author_name?: string;
  /**
   * a link to the author
   */
  author_link?: string;
  /**
   * a string to the author
   */
  author_icon?: string;
  /**
   * a title for the attachment
   */
  title?: string;
  /**
   * a link for the title
   */
  title_link?: string;
  /**
   * the main text of the message
   */
  text?: string;
  fields?: IAttachmentField[];
  image_url?: string;
  thumb_url?: string;
  footer?: string;
  footer_icon?: string;
  ts?: number;
}

export class SlackMessage {
  slackmeRef: SlackAccount;
  messageOptions: IMessageOptions;
  channel: string;
  ts: string;
  constructor(messageOptionsArg: IMessageOptions, slackmeArg?: SlackAccount) {
    if (slackmeArg) {
      this.slackmeRef = slackmeArg;
    }
    this.messageOptions = messageOptionsArg;
  }

  async updateAndSend(messageOptionsArg: IMessageOptions) {
    this.messageOptions = messageOptionsArg;
    await this.sendToRoom(this.channel, 'update');
  }

  async startThread(messageOptionsArg: IMessageOptions) {
    this.messageOptions = messageOptionsArg;
    this.sendToRoom(this.channel, 'threaded')
  }

  async sendToRoom(channelNameArg: string, modeArg: 'new' | 'update' | 'threaded' = 'new') {
    this.channel = channelNameArg;
    if (this.slackmeRef) {
      const response = await this.slackmeRef.sendMessage({
        channelArg: this.channel,
        messageOptionsArg: this.messageOptions,
        mode: modeArg,
        ts: this.ts
      });
      this.ts = response.body.message.ts;
      this.channel = response.body.channel;
    } else {
      throw new Error('you need to set a slackRef before sending the message!');
    }
  }
}
