# io.js 1.6.3 release
This week we had one io.js release [v1.6.3](https://iojs.org/dist/v1.6.3/), complete changelog can be found [on GitHub](https://github.com/iojs/io.js/blob/v1.x/CHANGELOG.md).

### Notable changes

#### 1.6.3

* **fs**: corruption can be caused by `fs.writeFileSync()` and append-mode `fs.writeFile()` and `fs.writeFileSync()` under certain circumstances, reported in [#1058](https://github.com/iojs/io.js/issues/1058), fixed in [#1063](https://github.com/iojs/io.js/pull/1063) (Olov Lassus).
* **iojs**: an "internal modules" API has been introduced to allow core code to share JavaScript modules internally only without having to expose them as a public API, this feature is for core-only [#848](https://github.com/iojs/io.js/pull/848) (Vladimir Kurchatkin).
* **timers**: two minor problems with timers have been fixed:
  - `Timer#close()` is now properly idempotent [#1288](https://github.com/iojs/io.js/issues/1288) (Petka Antonov).
  - `setTimeout()` will only run the callback once now after an `unref()` during the callback [#1231](https://github.com/iojs/io.js/pull/1231) (Roman Reiss).
  - NOTE: there are still other unresolved concerns with the timers code, such as [#1152](https://github.com/iojs/io.js/pull/1152).
* **Windows**: a "delay-load hook" has been added for compiled add-ons on Windows that should alleviate some of the problems that Windows users may be experiencing with add-ons in io.js [#1251](https://github.com/iojs/io.js/pull/1251) (Bert Belder).
* **V8**: minor bug-fix upgrade for V8 to 4.1.0.27.
* **npm**: upgrade npm to 2.7.4. See [npm CHANGELOG.md](https://github.com/npm/npm/blob/master/CHANGELOG.md#v274-2015-03-20) for details. Summary:
  * [`1549106`](https://github.com/npm/npm/commit/1549106f518000633915686f5f1ccc6afcf77f8f) [#7641](https://github.com/npm/npm/issues/7641) Due to 448efd0, running `npm shrinkwrap --dev` caused production dependencies to no longer be included in `npm-shrinkwrap.json`. Whoopsie! ([@othiym23](https://github.com/othiym23))
  * [`fb0ac26`](https://github.com/npm/npm/commit/fb0ac26eecdd76f6eaa4a96a865b7c6f52ce5aa5) [#7579](https://github.com/npm/npm/issues/7579) Only block removing files and links when we're sure npm isn't responsible for them. This change is hard to summarize, because if things are working correctly you should never see it, but if you want more context, just [go read the commit message](https://github.com/npm/npm/commit/fb0ac26eecdd76f6eaa4a96a865b7c6f52ce5aa5), which lays it all out. ([@othiym23](https://github.com/othiym23))
  * [`051c473`](https://github.com/npm/npm/commit/051c4738486a826300f205b71590781ce7744f01) [#7552](https://github.com/npm/npm/issues/7552) `bundledDependencies` are now properly included in the installation context. This is another fantastically hard-to-summarize bug, and once again, I encourage you to [read the commit message](https://github.com/npm/npm/commit/051c4738486a826300f205b71590781ce7744f01) if you're curious about the details. The snappy takeaway is that this unbreaks many use cases for `ember-cli`. ([@othiym23](https://github.com/othiym23))
  * [`fe1bc38`](https://github.com/npm/npm/commit/fe1bc387a14475e373557de669e03d9d006d3173)[#7672](https://github.com/npm/npm/issues/7672) `npm-registry-client@3.1.2`: Fix client-side certificate handling by correcting property name. ([@atamon](https://github.com/atamon))
  * [`89ce829`](https://github.com/npm/npm/commit/89ce829a00b526d0518f5cd855c323bffe182af0)[#7630](https://github.com/npm/npm/issues/7630) `hosted-git-info@1.5.3`: Part 3 of ensuring that GitHub shorthand is handled consistently. ([@othiym23](https://github.com/othiym23))
  * [`63313eb`](https://github.com/npm/npm/commit/63313eb0c37891c355546fd1093010c8a0c3cd81)[#7630](https://github.com/npm/npm/issues/7630) `realize-package-specifier@2.2.0`: Part 2 of ensuring that GitHub shorthand is handled consistently. ([@othiym23](https://github.com/othiym23))
  * [`3ed41bf`](https://github.com/npm/npm/commit/3ed41bf64a1bb752bb3155c74dd6ffbbd28c89c9)[#7630](https://github.com/npm/npm/issues/7630) `npm-package-arg@3.1.1`: Part 1 of ensuring that GitHub shorthand is handled consistently. ([@othiym23](https://github.com/othiym23))

### Known issues

* Some problems exist with timers and `unref()` still to be resolved. See [#1152](https://github.com/iojs/io.js/pull/1152).
* Possible small memory leak(s) may still exist but have yet to be properly identified, details at [#1075](https://github.com/iojs/io.js/issues/1075).
* Surrogate pair in REPL can freeze terminal [#690](https://github.com/iojs/io.js/issues/690)
* Not possible to build io.js as a static library [#686](https://github.com/iojs/io.js/issues/686)
* `process.send()` is not synchronous as the docs suggest, a regression introduced in 1.0.2, see [#760](https://github.com/iojs/io.js/issues/760) and fix in [#774](https://github.com/iojs/io.js/issues/774)
* Calling `dns.setServers()` while a DNS query is in progress can cause the process to crash on a failed assertion [#894](https://github.com/iojs/io.js/issues/894)

### Commits

* [[`7dd5e824be`](https://github.com/iojs/io.js/commit/7dd5e824be)] - **assert**: simplify logic of testing buffer equality (Alex Yursha) [#1171](https://github.com/iojs/io.js/pull/1171)
* [[`a2ea16838f`](https://github.com/iojs/io.js/commit/a2ea16838f)] - **debugger**: don't spawn child process in remote mode (Jackson Tian) [#1282](https://github.com/iojs/io.js/pull/1282)
* [[`2752da4b64`](https://github.com/iojs/io.js/commit/2752da4b64)] - **deps**: make node-gyp work with io.js (cjihrig) [#990](https://github.com/iojs/io.js/pull/990)
* [[`f166cdecf1`](https://github.com/iojs/io.js/commit/f166cdecf1)] - **deps**: upgrade npm to 2.7.4 (Forrest L Norvell)
* [[`318d9d8fd7`](https://github.com/iojs/io.js/commit/318d9d8fd7)] - **deps**: upgrade v8 to 4.1.0.27 (Ben Noordhuis) [#1289](https://github.com/iojs/io.js/pull/1289)
* [[`269e46be37`](https://github.com/iojs/io.js/commit/269e46be37)] - **deps**: make node-gyp work with io.js (cjihrig) [#990](https://github.com/iojs/io.js/pull/990)
* [[`b542fb94a4`](https://github.com/iojs/io.js/commit/b542fb94a4)] - **deps**: upgrade npm to 2.7.3 (Forrest L Norvell) [#1219](https://github.com/iojs/io.js/pull/1219)
* [[`73de13511d`](https://github.com/iojs/io.js/commit/73de13511d)] - **doc**: add WG links in WORKING_GROUPS.md & fix nits (Farrin Reid) [#1113](https://github.com/iojs/io.js/pull/1113)
* [[`19641b17be`](https://github.com/iojs/io.js/commit/19641b17be)] - **doc**: decouple sidebar scrolling (Roman Reiss) [#1274](https://github.com/iojs/io.js/pull/1274)
* [[`dbccf8d3ed`](https://github.com/iojs/io.js/commit/dbccf8d3ed)] - **doc**: fix spelling error in feature flags (Phillip Lamplugh) [#1286](https://github.com/iojs/io.js/pull/1286)
* [[`5e609e9324`](https://github.com/iojs/io.js/commit/5e609e9324)] - ***Revert*** "**doc**: clarify real name requirement" (Jeremiah Senkpiel) [#1276](https://github.com/iojs/io.js/pull/1276)
* [[`45814216ee`](https://github.com/iojs/io.js/commit/45814216ee)] - **doc**: fix format docs discrepancy (Brendan Ashworth) [#1255](https://github.com/iojs/io.js/pull/1255)
* [[`4e9bf93e9c`](https://github.com/iojs/io.js/commit/4e9bf93e9c)] - **doc**: clarify real name requirement (Roman Reiss) [#1250](https://github.com/iojs/io.js/pull/1250)
* [[`e84dd5f651`](https://github.com/iojs/io.js/commit/e84dd5f651)] - **doc**: document repl on-demand module loading (Roman Reiss) [#1249](https://github.com/iojs/io.js/pull/1249)
* [[`c9207f7fc2`](https://github.com/iojs/io.js/commit/c9207f7fc2)] - **fs**: fix corruption in writeFile and writeFileSync (Olov Lassus) [#1063](https://github.com/iojs/io.js/pull/1063)
* [[`2db758c562`](https://github.com/iojs/io.js/commit/2db758c562)] - **iojs**: introduce internal modules (Vladimir Kurchatkin) [#848](https://github.com/iojs/io.js/pull/848)
* [[`36f017afaf`](https://github.com/iojs/io.js/commit/36f017afaf)] - **js2c**: fix module id generation on windows (Ben Noordhuis) [#1281](https://github.com/iojs/io.js/pull/1281)
* [[`1832743e18`](https://github.com/iojs/io.js/commit/1832743e18)] - **lib**: add missing `new` for errors lib/*.js (Mayhem) [#1246](https://github.com/iojs/io.js/pull/1246)
* [[`ea37ac04f4`](https://github.com/iojs/io.js/commit/ea37ac04f4)] - **src**: ignore ENOTCONN on shutdown race with child (Ben Noordhuis) [#1214](https://github.com/iojs/io.js/pull/1214)
* [[`f06b16f2e9`](https://github.com/iojs/io.js/commit/f06b16f2e9)] - **src**: fix minor memleak in preload-modules (Ali Ijaz Sheikh) [#1265](https://github.com/iojs/io.js/pull/1265)
* [[`2903410aa8`](https://github.com/iojs/io.js/commit/2903410aa8)] - **src**: don't lazy-load timer globals (Ben Noordhuis) [#1280](https://github.com/iojs/io.js/pull/1280)
* [[`2e5b87a147`](https://github.com/iojs/io.js/commit/2e5b87a147)] - **src**: remove unnecessary environment lookups (Ben Noordhuis) [#1238](https://github.com/iojs/io.js/pull/1238)
* [[`7e88a9322c`](https://github.com/iojs/io.js/commit/7e88a9322c)] - **src**: make accessors immune to context confusion (Ben Noordhuis) [#1238](https://github.com/iojs/io.js/pull/1238)
* [[`c8fa8ccdbc`](https://github.com/iojs/io.js/commit/c8fa8ccdbc)] - **streams**: use strict on _stream_wrap (Brendan Ashworth) [#1279](https://github.com/iojs/io.js/pull/1279)
* [[`8a945814dd`](https://github.com/iojs/io.js/commit/8a945814dd)] - **string_decoder**: optimize write() (Brian White) [#1209](https://github.com/iojs/io.js/pull/1209)
* [[`8d1c87ea0a`](https://github.com/iojs/io.js/commit/8d1c87ea0a)] - **test**: fix race in parallel/test-vm-debug-context (Ben Noordhuis) [#1294](https://github.com/iojs/io.js/pull/1294)
* [[`955c1508da`](https://github.com/iojs/io.js/commit/955c1508da)] - **test**: reduce sequential/test-fs-watch flakiness (Roman Reiss) [#1275](https://github.com/iojs/io.js/pull/1275)
* [[`77c2da10fd`](https://github.com/iojs/io.js/commit/77c2da10fd)] - **timers**: make Timer.close idempotent (Petka Antonov) [#1288](https://github.com/iojs/io.js/pull/1288)
* [[`776b73b243`](https://github.com/iojs/io.js/commit/776b73b243)] - **timers**: cleanup interval handling (Jeremiah Senkpiel) [#1272](https://github.com/iojs/io.js/pull/1272)
* [[`caf0b36de3`](https://github.com/iojs/io.js/commit/caf0b36de3)] - **timers**: assure setTimeout callback only runs once (Roman Reiss) [#1231](https://github.com/iojs/io.js/pull/1231)
* [[`2ccc8f3970`](https://github.com/iojs/io.js/commit/2ccc8f3970)] - **tls_wrap**: fix this incredibly stupid leak (Fedor Indutny) [#1244](https://github.com/iojs/io.js/pull/1244)
* [[`e74b5d278c`](https://github.com/iojs/io.js/commit/e74b5d278c)] - **tls_wrap**: fix BIO leak on SSL error (Fedor Indutny) [#1244](https://github.com/iojs/io.js/pull/1244)
* [[`ba93c583bc`](https://github.com/iojs/io.js/commit/ba93c583bc)] - **win,node-gyp**: optionally allow node.exe/iojs.exe to be renamed (Bert Belder) [#1266](https://github.com/iojs/io.js/pull/1266)
* [[`08acf1352c`](https://github.com/iojs/io.js/commit/08acf1352c)] - **win,node-gyp**: make delay-load hook optional (Bert Belder) [#1266](https://github.com/iojs/io.js/pull/1266)
* [[`3d46fefe0c`](https://github.com/iojs/io.js/commit/3d46fefe0c)] - **win,node-gyp**: allow node.exe/iojs.exe to be renamed (Bert Belder) [#1251](https://github.com/iojs/io.js/pull/1251)

# Community Updates

* [Scaleway](https://www.scaleway.com/) provides some ARM resources for the iojs test/build infrastructure.
* New post on Medium about Node.js reconciliation: [Help us reconcile node.js and io.js](https://medium.com/node-js-javascript/help-us-reconcile-node-js-and-io-js-c060a9ec1bd4)
* Added support for iojs in [Reactive-Extensions/RxJS](https://travis-ci.org/Reactive-Extensions/RxJS/builds/56671837)
* [joyent/nodejs-advisory-board#30](https://github.com/joyent/nodejs-advisory-board/pull/30) merged
* Mikeal Rogers working on reconciling Project Lifecyce and WIG [joyent/nodejs-advisory-board#33](https://github.com/joyent/nodejs-advisory-board/pull/33)

# Upcoming Events

* [NodeConf](http://nodeconf.com/) tickets are on sale, June 8th and 9th at Oakland, CA and NodeConf Adventure for June 11th - 14th at Walker Creek Ranch, CA
* [CascadiaJS](http://2015.cascadiajs.com/) tickets are on sale, July 8th - 10th at Washington State
* [NodeConf EU](http://nodeconf.eu/) tickets are on sale, September 6th - 9th at Waterford, Ireland
* [nodeSchool tokyo](http://nodejs.connpass.com/event/13182/) will be held in April 12th at Tokyo, Japan

