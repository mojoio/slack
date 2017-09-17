import * as plugins from './slackme.plugins'
import { SlackMessage } from './slackme.classes.slackmessage'
export interface ISlackmeMessage {
  message: string,
  author: string,

}

export {
  SlackMessage
}

export class Slackme {
  private baseUrl = 'https://hooks.slack.com/services/'
  private postRoute: string
  constructor (postRouteArg: string) {
    this.postRoute = postRouteArg
  }

  sendMessage(messageArg: SlackMessage, channelArg: string = 'general') {
    plugins.smartrequest.post(`${this.baseUrl}${this.postRoute}`,{
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        channel: channelArg,
        attachments: [
          messageArg.messageOptions
        ]
      }
    })
  }
}
