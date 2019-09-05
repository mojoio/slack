import { expect, tap } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit');

import * as slackme from '../ts/index';

let testSlackme: slackme.Slackme;
let testSlackMessage: slackme.SlackMessage;

tap.test('should create a valid slackme instance', async () => {
  testSlackme = new slackme.Slackme(testQenv.getEnvVarOnDemand('SLACK_TOKEN'));
});

tap.test('should send a message to Slack', async () => {
  testSlackMessage = new slackme.SlackMessage({
    author_name: 'GitLab CI',
    author_link: 'https://gitlab.com/',
    pretext: '*Good News*: Build successfull!',
    color: '#3cb371',
    fields: [
      {
        title: 'Branch',
        value: 'Lossless Cloud',
        short: true
      },
      {
        title: 'Product ID',
        value: 'pushrocks',
        short: true
      }
    ],
    ts: new Date().getTime() / 1000
  });
  await testSlackme.sendMessage(testSlackMessage.messageOptions, 'random');
  await expect(testSlackMessage.sendToRoom('random')).to.eventually.be.rejected;
});

tap.test('should send a message to Slack by directly calling the message', async () => {
  testSlackMessage = new slackme.SlackMessage(
    {
      author_name: 'GitLab CI',
      author_link: 'https://gitlab.com/',
      pretext: '*Good News*: Build successfull!',
      color: '#3cb371',
      fields: [
        {
          title: 'Branch',
          value: 'Lossless Cloud',
          short: true
        },
        {
          title: 'Product ID',
          value: 'pushrocks',
          short: true
        }
      ],
      ts: new Date().getTime() / 1000
    },
    testSlackme
  );
  await testSlackMessage.sendToRoom('random');
});

tap.start();
