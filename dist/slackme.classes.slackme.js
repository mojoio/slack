"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./slackme.plugins");
class Slackme {
    constructor(postRouteArg) {
        this.baseUrl = 'https://hooks.slack.com/services/';
        this.postRoute = postRouteArg;
    }
    sendMessage(messageOptionsArg, channelArg = 'general') {
        plugins.smartrequest.post(`${this.baseUrl}${this.postRoute}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            requestBody: {
                channel: channelArg,
                attachments: [
                    messageOptionsArg
                ]
            }
        });
    }
}
exports.Slackme = Slackme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2ttZS5jbGFzc2VzLnNsYWNrbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbGFja21lLmNsYXNzZXMuc2xhY2ttZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE0QztBQUc1QztJQUdFLFlBQWEsWUFBb0I7UUFGekIsWUFBTyxHQUFHLG1DQUFtQyxDQUFBO1FBR25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFBO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsaUJBQWtDLEVBQUUsYUFBcUIsU0FBUztRQUM1RSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQzNELE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixXQUFXLEVBQUU7b0JBQ1gsaUJBQWlCO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBcEJELDBCQW9CQyJ9