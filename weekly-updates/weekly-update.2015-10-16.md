---
title: Weekly Update - Oct 16th, 2015
author: Minwoo Jung (@jmwsoft)
date: 2015-10-16T12:00:00.000Z
status: publish
category: weekly
slug: weekly-update-2015-10-16
layout: blog-post.hbs
---

### Node.js News — October 16th
Node.js v4.2.1 (LTS), v4.2.0 (LTS) are released

### Node.js v4.2.1 (LTS) and v4.2.0 (LTS) Releases

This week we have two releases: [Node.js v4.2.1 (LTS)](https://nodejs.org/en/blog/release/v4.2.1/) and [Node.js v4.2.0 (LTS)](https://nodejs.org/en/blog/release/v4.2.0/). complete changelog from previous releases can be found [on GitHub](https://github.com/nodejs/node/blob/master/CHANGELOG.md).

### Notable changes

* Includes fixes for two regressions
  - Assertion error in WeakCallback  - see [#3329](https://github.com/nodejs/node/pull/3329)
  - Undefined timeout regression - see [#3331](https://github.com/nodejs/node/pull/3331)

### Known issues

* When a server queues a large amount of data to send to a client over a pipelined HTTP connection, the underlying socket may be destroyed. See [#3332](https://github.com/nodejs/node/issues/3332) and [#3342](https://github.com/nodejs/node/pull/3342).
* Some problems with unreferenced timers running during `beforeExit` are still to be resolved. See [#1264](https://github.com/nodejs/node/issues/1264).
* Surrogate pair in REPL can freeze terminal. [#690](https://github.com/nodejs/node/issues/690)
* Calling `dns.setServers()` while a DNS query is in progress can cause the process to crash on a failed assertion. [#894](https://github.com/nodejs/node/issues/894)
* `url.resolve` may transfer the auth portion of the url when resolving between two full hosts, see [#1435](https://github.com/nodejs/node/issues/1435).

### Community Updates

* [Node.js v4.2.1 Release Summary and Stats](https://nodesource.com/blog/nodejs-v421-release-summary-and-stats), "Closely tracking the Long Term Support plan, 4.2.0 and 4.2.1 have been released this week as LTS. v4.2.1 has been released to fix two critical regressions in v4.2.0. It is highly suggested you use v4.2.1 instead of v4.2.0"
* [A Hubot Plugin that Helps You to Choose Where to Drink Coffee](http://ditrospecta.com/javascript/plugin/hubot/2015/10/03/hubot-plugin-choose-place-to-drink-coffee.html), "Hubot is a very friendly and easy extensible bot written in Coffeescript"
* [Building using Node-GYP with Visual Studio Express 2015 on Windows 10 Pro x64](http://www.serverpals.com/blog/building-using-node-gyp-with-visual-studio-express-2015-on-windows-10-pro-x64), "Setting up a development environment, using Node-GYP with Visual Studio Express 2015 on Windows 10 Pro x64"
* [Linux and Node.js in Production using Daemontools and NDT](http://www.serverpals.com/blog/linux-nodejs-in-production-using-daemontools-ndt), "Putting the application to the test with Linux and Node.js in Production using Daemontools and NDT"
* [Using Bower with BowerCDN for better web performance!](http://www.serverpals.com/blog/using-bower-with-bowercdn-for-better-web-performance), "BowerCDN is a service built on the bower API that installs and maintains permalinks to bower repository content"

If you have spotted or written something about Node.js, do come over to our [Evangelism team repo](https://github.com/nodejs/evangelism) and suggest it on the [Issues page](https://github.com/nodejs/evangelism/issues), specifically the Weekly Updates issue.

### Upcoming Events

* [JSConf CO](http://www.jsconf.co/), October 16th - 17th at Ruta N, Medellin, Colombia
* [EmpireNode](http://2015.empirenode.org/), October 23rd at New York, US.
* [NodeFest](http://nodefest.jp/2015/), November 7th at Stack Exchange HQ, Old St
* [Node Girls London](https://nodegirls.typeform.com/to/atW4HR), November 7th at Stack Exchange HQ, Old St
* [Playnode](http://playnode.io/), November 12nd at Seoul, South Korea
* [Nodevember](http://nodevember.org/?utm_source=io.js+and+Node.js+News&utm_medium=article), November 14th - 15th at Nashville, Tennessee, US.
* [NodeConf Barcelona](https://ti.to/barcelonajs/nodeconf-barcelona-2015), November 21st at Barcelona, Spain
* [CampJS VI](http://vi.campjs.com), November 20 – 23th at Queensland, Australia
* [Node.js Interactive](http://events.linuxfoundation.org/events/node-interactive), December 8-9 at Portland, US.

Have an event about Node.js coming up? You can put your events here through the [Evangelism team repo](https://github.com/nodejs/evangelism) and announce it in the [Issues page](https://github.com/nodejs/evangelism/issues), specifically the Weekly Updates issue.
