"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlackMessage {
    constructor(messageOptionsArg, slackmeArg) {
        if (slackmeArg) {
            this.slackmeRef = slackmeArg;
        }
        this.messageOptions = messageOptionsArg;
    }
    sendToRoom(roomNameArg) {
        if (this.slackmeRef) {
            this.slackmeRef.sendMessage(this.messageOptions, roomNameArg);
        }
    }
}
exports.SlackMessage = SlackMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2ttZS5jbGFzc2VzLnNsYWNrbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NsYWNrbWUuY2xhc3Nlcy5zbGFja21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF5REE7SUFHRSxZQUFZLGlCQUFrQyxFQUFFLFVBQW9CO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLFdBQW1CO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDL0QsQ0FBQztJQUNILENBQUM7Q0FDRjtBQWRELG9DQWNDIn0=