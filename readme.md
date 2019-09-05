# @mojoio/slack
slack api abstraction for the mojo.io ecosystem

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@mojoio/slack)
* [gitlab.com (source)](https://gitlab.com/mojoio/slack)
* [github.com (source mirror)](https://github.com/mojoio/slack)
* [docs (typedoc)](https://mojoio.gitlab.io/slack/)

## Status for master
[![build status](https://gitlab.com/mojoio/slack/badges/master/build.svg)](https://gitlab.com/mojoio/slack/commits/master)
[![coverage report](https://gitlab.com/mojoio/slack/badges/master/coverage.svg)](https://gitlab.com/mojoio/slack/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@mojoio/slack.svg)](https://www.npmjs.com/package/@mojoio/slack)
[![Known Vulnerabilities](https://snyk.io/test/npm/@mojoio/slack/badge.svg)](https://snyk.io/test/npm/@mojoio/slack)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as slackme from 'slackme'

// First setup the hook
const mySlackme = new Slackme('https://some.slack.webhook.url')
mySlackme.sendMessage:{{
  // MessageOptions here
}, 'myAwesomeChannel'}
```

The message interface follows [Slack's docs (click here)](https://api.slack.com/docs/message-formatting) and looks like this:

```javascript
interface IAttachmentField {
  title: string
  value: string
  short?: boolean
}

interface IMessageOptions {
  /**
   * "Required plain-text summary of the attachment."
   */
  fallback?: string,
  /**
   * a side color
   */
  color?: string,
  /**
   * a message to show above
   */
  pretext?: string,
  /**
   * author name of the attachment
   */
  author_name?: string,
  /**
   * a link to the author
   */
  author_link?: string,
  /**
   * a string to the author
   */
  author_icon?: string,
  /**
   * a title for the attachment
   */
  title?: string,
  /**
   * a link for the title
   */
  title_link?: string,
  /**
   * the main text of the message
   */
  text?: string,
  fields?: IAttachmentField[],
  image_url?: string,
  thumb_url?: string,
  footer?: string,
  footer_icon?: string,
  /**
   * timestamp as epoch time
   */
  ts?: number
}
```

Alternatively, there is the option of specifying a SlackMessage class

```javascript
const mySlackMessage = new SlackMessage({ /* message options here } */, mySlackme)
mySlackMessage.title = 'new Title' // modify message options
mySlackMessage.sendToRoom('general')
mySlackMessage.title = 'another Title'
mySlackMessage.sendToRoom('anotherroom')
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
