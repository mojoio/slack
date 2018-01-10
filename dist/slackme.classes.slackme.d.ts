import { IMessageOptions } from './slackme.classes.slackmessage';
export declare class Slackme {
    private baseUrl;
    private postRoute;
    constructor(postRouteArg: string);
    sendMessage(messageOptionsArg: IMessageOptions, channelArg?: string): void;
}
