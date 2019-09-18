import { expect, tap } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit');

import * as slackme from '../ts/index';

let testSlackme: slackme.SlackAccount;
let testSlackMessage: slackme.SlackMessage;

tap.test('should create a valid slackme instance', async (tools) => {
  testSlackme = new slackme.SlackAccount(testQenv.getEnvVarOnDemand('SLACK_TOKEN'));
});

tap.test('should send a message to Slack', async (tools) => {
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
    ]
  });
  await testSlackme.sendMessage({
    channelArg: 'random',
    messageOptionsArg: testSlackMessage.messageOptions,
    mode: 'new'
  });
});

tap.test('should send a message to Slack by directly calling the message', async (tools) => {
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
      ]
    },
    testSlackme
  );
  await testSlackMessage.sendToRoom('random');
  await tools.delayFor(1000);
  await testSlackMessage.updateAndSend({
    author_name: 'GitLab CI',
    author_link: 'https://gitlab.com/',
    pretext: '*Good News*: Build successfull!',
    color: '#3cb371',
    fields: [
      {
        title: 'Branch',
        value: 'Lossless Studio',
        short: true
      },
      {
        title: 'Product ID',
        value: 'pushrocks',
        short: true
      }
    ]
  });
  await testSlackMessage.updateAndSend({
    author_name: 'GitLab CI',
    author_link: 'https://gitlab.com/',
    pretext: '*Good News*: Build successfull!',
    color: '#3cb371',
    fields: [
      {
        title: 'Branch',
        value: 'Lossless Studio',
        short: true
      },
      {
        title: 'Product ID',
        value: 'onboard.me',
        short: true
      }
    ]
  });
  await testSlackMessage.startThread({
    author_name: 'Lossless Compliance',
    author_link: 'https://gitlab.com/',
    pretext: '*Good News*: Build successfull!',
    color: '#3cb371',
    fields: [
      {
        title: 'Branch',
        value: 'Lossless Studio',
        short: true
      },
      {
        title: 'Product ID',
        value: 'pushrocks',
        short: true
      }
    ]
  })
});

tap.start();
