import { SlackAccount } from "./slack.classes.slackaccount";
import { SlackMessage } from "./slack.classes.slackmessage";

export class SlackLog {
  public slackAccount: SlackAccount;
  public slackMessage: SlackMessage;
  public channelName: string;

  public completeLog = ``;

  constructor(optionsArg: {
    slackAccount: SlackAccount;
    channelName: string;
  }) {
    this.slackAccount = optionsArg.slackAccount;
    this.channelName = optionsArg.channelName;
  }
  public async sendLogLine(logText: string) {
    if (!this.slackMessage) {
      this.slackMessage = new SlackMessage(this.slackAccount, {
        text: '``` log is loading... ```'
      });
      await this.slackMessage.sendToRoom(this.channelName);
    }
    const date = new Date();
    this.completeLog += `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ` + logText + '\n';
    await this.slackMessage.updateAndSend({
      text: '```\n' + this.completeLog + '\n```' 
    })
  }

};