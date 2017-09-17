"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./slackme.plugins");
const slackme_classes_slackmessage_1 = require("./slackme.classes.slackmessage");
exports.SlackMessage = slackme_classes_slackmessage_1.SlackMessage;
class Slackme {
    constructor(postRouteArg) {
        this.baseUrl = 'https://hooks.slack.com/services/';
        this.postRoute = postRouteArg;
    }
    sendMessage(messageArg, channelArg = 'general') {
        plugins.smartrequest.post(`${this.baseUrl}${this.postRoute}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            requestBody: {
                channel: channelArg,
                attachments: [
                    messageArg.messageOptions
                ]
            }
        });
    }
}
exports.Slackme = Slackme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE0QztBQUM1QyxpRkFBNkQ7QUFRM0QsdUJBUk8sMkNBQVksQ0FRUDtBQUdkO0lBR0UsWUFBYSxZQUFvQjtRQUZ6QixZQUFPLEdBQUcsbUNBQW1DLENBQUE7UUFHbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUE7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUF3QixFQUFFLGFBQXFCLFNBQVM7UUFDbEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUMzRCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNELFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsV0FBVyxFQUFFO29CQUNYLFVBQVUsQ0FBQyxjQUFjO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBcEJELDBCQW9CQyJ9