import * as plugins from './slack.plugins';
import { Slackme } from './slack.classes.slackme';

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
  slackmeRef: Slackme;
  messageOptions: IMessageOptions;
  channel: string;
  ts: string;
  constructor(messageOptionsArg: IMessageOptions, slackmeArg?: Slackme) {
    if (slackmeArg) {
      this.slackmeRef = slackmeArg;
    }
    this.messageOptions = messageOptionsArg;
  }

  async updateAndSend(messageOptionsArg: IMessageOptions) {
    this.messageOptions = messageOptionsArg;
    await this.sendToRoom(this.channel);
  }

  async sendToRoom(roomNameArg: string) {
    this.channel = roomNameArg;
    if (this.slackmeRef) {
      const response = await this.slackmeRef.sendMessage(this.messageOptions, roomNameArg, this.ts);
      this.ts = response.body.message.ts;
      this.channel = response.body.channel;
    } else {
      throw new Error('you need to set a slackRef before sending the message!');
    }
  }
}
