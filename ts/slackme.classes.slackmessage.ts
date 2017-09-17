import * as plugins from './slackme.plugins'

export interface IMessageOptions {
  /**
   * "Required plain-text summary of the attachment."
   */
  fallback?: string,
  /**
   * a side color
   */
  color?: string,
  /**
   * a message to show above
   */
  pretext?: string,
  "author_name"?: "Bobby Tables",
  "author_link"?: "http://flickr.com/bobby/",
  "author_icon"?: "http://flickr.com/icons/bobby.jpg",
  "title"?: "Slack API Documentation",
  "title_link"?: "https://api.slack.com/",
  /**
   * the main text of the message
   */
  text?: string,
  "fields"?: [
    {
      "title"?: "Priority",
      "value"?: "High",
      "short"?: false
    }
  ],
  "image_url"?: "http://my-website.com/path/to/image.jpg",
  "thumb_url"?: "http://example.com/path/to/thumb.png",
  "footer"?: "Slack API",
  "footer_icon"?: "https://platform.slack-edge.com/img/default_application_icon.png",
  /**
   * timestamp as epoch time
   */
  ts?: number
}

export class SlackMessage {
  messageOptions: IMessageOptions
  constructor(messageOptions: IMessageOptions) {
    this.messageOptions = messageOptions
  }
}
