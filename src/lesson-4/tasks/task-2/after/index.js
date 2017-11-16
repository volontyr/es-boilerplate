'use strict';

import commonValidate from "../helpers";

export default () => {

    let time = {
        minutes: 0,
        seconds: 0
    };

    let pause = true;

    const incTime = (incValue = 1) => {
        let { minutes: min = 0, seconds: sec = 0 } = time;
        sec += incValue;
        time = {
            minutes: min + Math.floor(sec / 60),
            seconds: Math.floor(sec % 60)
        };
    };

    return {
        init: (initValue = 0, callback = () => {}) => {
            commonValidate(initValue, 'number', 'Init value of init method must be a Number');
            commonValidate(callback, 'function', 'Second parameter of init method must be a Function');

            incTime(initValue);

            callback();
        },
        start: (speed = 1, callback = () => {}) => {
            commonValidate(speed, 'number', 'First parameter of init method must be a Number');
            commonValidate(callback, 'function', 'Second parameter of start method must be a Function');

            pause = false;

            const delay = 1000 / speed;

            let repeater = setInterval(() => {
                if (pause) {
                    clearInterval(repeater);
                    return;
                }
                incTime();
                callback(time);
            }, delay);
        },
        pause: (callback = () => {}) => {
            commonValidate(callback, 'function', 'Parameter of pause method must be a Function');

            pause = true;

            callback(time);
        },
        stop: (callback = () => {}) => {
            commonValidate(callback, 'function', 'Parameter of stop method must be a Function');

            pause = true;

            callback(time);

            time.minutes = 0;
            time.seconds = 0;
        }
    }
};
