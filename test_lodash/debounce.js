const EventEmitter = require('events');
const _ = require('lodash');

function showNotification() {
    console.log("Notification up!");
}

function useDebounce() {
    let notify = new EventEmitter();
    notify.on("Yeah!", () => {
        _.debounce("Yeah!", showNotification);
    });
}

useDebounce();
const emitterDummy = new EventEmitter();
emitterDummy.emit("Yeah!");
