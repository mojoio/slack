import { SlackMessage } from './slackme.classes.slackmessage';
export interface ISlackmeMessage {
    message: string;
    author: string;
}
export { SlackMessage };
export declare class Slackme {
    private baseUrl;
    private postRoute;
    constructor(postRouteArg: string);
    sendMessage(messageArg: SlackMessage, channelArg?: string): void;
}
