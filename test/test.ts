import { expect, tap } from 'tapbundle'
import { Qenv } from 'qenv'

let testQenv = new Qenv(process.cwd(), process.cwd() + '/.nogit')

import * as slackme from '../ts/index'

let testSlackme: slackme.Slackme

tap.test('should create a valid slackme instance', async () => {
  testSlackme = new slackme.Slackme(process.env.SLACK_TOKEN)
})

tap.test('should send a message to Slack', async () => {
  let slackMessage = new slackme.SlackMessage({
    text: 'hi. This is a text',
    color: '#3cb371'
  })
  testSlackme.sendMessage(slackMessage, 'random')
})

tap.start()
