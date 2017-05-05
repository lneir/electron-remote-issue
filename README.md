# electron-remote-issue
issue with electron remote in electron 1.6.8
on mac osx 

1. npm install
2. npm run start
3. in the app click the button
4. reload the app (cmd-r)
5. now click the button a bunch more times (approx 15) and you'll see crash below:

Uncaught Error: Cannot call constructor on missing remote object 36
Error: Cannot call constructor on missing remote object 36
    at throwRPCError (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:143:17)
    at EventEmitter.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:303:7)
    at emitThree (events.js:116:13)
    at EventEmitter.emit (events.js:194:7)
    at WebContents.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/api/web-contents.js:256:37)
    at emitTwo (events.js:106:13)
    at WebContents.emit (events.js:191:7)
    at throwRPCError (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:143:17)
    at EventEmitter.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:303:7)
    at emitThree (events.js:116:13)
    at EventEmitter.emit (events.js:194:7)
    at WebContents.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-remote-issue/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/api/web-contents.js:256:37)
    at emitTwo (events.js:106:13)
    at WebContents.emit (events.js:191:7)
    at metaToValue (<anonymous>:552:13)
    at new remoteFunction (<anonymous>:565:20)
    at HTMLButtonElement.<anonymous> (file:///Users/lneir/IntelliJProjects/tests/electron-remote-issue/index.html:15:17)
