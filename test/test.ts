import { expect, tap } from '@pushrocks/tapbundle';
import { Qenv } from '@pushrocks/qenv';

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit');

import * as slackme from '../ts/index';

let testSlackAccount: slackme.SlackAccount;
let testSlackMessage: slackme.SlackMessage;

tap.test('should create a valid slackme instance', async (tools) => {
  testSlackAccount = new slackme.SlackAccount(testQenv.getEnvVarOnDemand('SLACK_TOKEN'));
});

tap.test('should send a message to Slack', async (tools) => {
  const messageOptions = {
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
  };
  await testSlackAccount.sendMessage({
    channelArg: 'random',
    messageOptions: messageOptions,
    mode: 'new'
  });
});

tap.test('should send a message to Slack by directly calling the message', async (tools) => {
  testSlackMessage = new slackme.SlackMessage(
    testSlackAccount,
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
    }
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

tap.test('should send logs', async () => {
  const slackLog = new slackme.SlackLog({
    slackAccount: testSlackAccount,
    channelName: 'random'
  })
  for (let i = 0; i < 30; i++) {
    await slackLog.sendLogLine('hi there');
    await slackLog.sendLogLine('so awesome');
    await slackLog.sendLogLine('really');
  }
  
  
})

tap.start();
