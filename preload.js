const { remote } = require('electron');

window.Hello = remote.require('./hello.js');
// window.API = {
//     Hello: remote.require('./hello.js')
// }
//
// Object.freeze(window.API);
