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
  public slackAccountRef: SlackAccount;
  public messageOptions: IMessageOptions;
  public channel: string;
  public ts: string;

  public requestRunning = plugins.smartpromise.defer();

  constructor(slackAccountArg: SlackAccount, messageOptionsArg: IMessageOptions) {
    if (slackAccountArg) {
      this.slackAccountRef = slackAccountArg;
    }
    this.messageOptions = messageOptionsArg;
    this.requestRunning.resolve();
  }

  async updateAndSend(messageOptionsArg: IMessageOptions) {
    this.messageOptions = messageOptionsArg;
    await this.sendToRoom(this.channel, 'update');
  }

  async startThread(messageOptionsArg: IMessageOptions) {
    this.messageOptions = messageOptionsArg;
    this.sendToRoom(this.channel, 'threaded');
  }

  async sendToRoom(channelNameArg: string, modeArg: 'new' | 'update' | 'threaded' = 'new') {
    this.channel = channelNameArg;
    if (this.slackAccountRef) {
      const response = await this.slackAccountRef.sendMessage({
        channelArg: this.channel,
        messageOptions: this.messageOptions,
        mode: modeArg,
        ts: this.ts
      });
      if (modeArg === 'new') {
        this.ts = response.body.message.ts;
        this.channel = response.body.channel;
      }
    } else {
      throw new Error('you need to set a slackRef before sending the message!');
    }
  }
}
