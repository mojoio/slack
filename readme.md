# slackme
API abstraction for mojoio

## Availabililty
[![npm](https://mojoio.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/slackme)
[![git](https://mojoio.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/mojoio/slackme)
[![git](https://mojoio.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/mojoio/slackme)
[![docs](https://mojoio.gitlab.io/assets/repo-button-docs.svg)](https://mojoio.gitlab.io/slackme/)

## Status for master
[![build status](https://GitLab.com/mojoio/slackme/badges/master/build.svg)](https://GitLab.com/mojoio/slackme/commits/master)
[![coverage report](https://GitLab.com/mojoio/slackme/badges/master/coverage.svg)](https://GitLab.com/mojoio/slackme/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/slackme.svg)](https://www.npmjs.com/package/slackme)
[![Dependency Status](https://david-dm.org/mojoio/slackme.svg)](https://david-dm.org/mojoio/slackme)
[![bitHound Dependencies](https://www.bithound.io/github/mojoio/slackme/badges/dependencies.svg)](https://www.bithound.io/github/mojoio/slackme/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/mojoio/slackme/badges/code.svg)](https://www.bithound.io/github/mojoio/slackme)
[![Known Vulnerabilities](https://snyk.io/test/npm/slackme/badge.svg)](https://snyk.io/test/npm/slackme)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)

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

The message interface looks like this:

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

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://mojoio.gitlab.io/assets/repo-footer.svg)](https://mojo.io)
