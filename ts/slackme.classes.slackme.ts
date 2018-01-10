import * as plugins from './slackme.plugins'
import { IMessageOptions } from './slackme.classes.slackmessage'

export class Slackme {
  private baseUrl = 'https://hooks.slack.com/services/'
  private postRoute: string
  constructor (postRouteArg: string) {
    this.postRoute = postRouteArg
  }

  sendMessage(messageOptionsArg: IMessageOptions, channelArg: string = 'general') {
    plugins.smartrequest.post(`${this.baseUrl}${this.postRoute}`,{
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        channel: channelArg,
        attachments: [
          messageOptionsArg
        ]
      }
    })
  }
}
