'use strict';

import { Validator } from "../helpers";

export class Timer {

    constructor() {
        this._counter = 0;
        this._repeater = null;
    }

    init(initValue = 0, callback) {
        Validator.validateNumber(initValue);
        Validator.validateFunction(callback);

        if (initValue < 0) {
            throw new Error(`Initial value must be greater than 0. You passed ${ initValue }.`);
        }

        this._counter = initValue;

        callback();
    }

    start(speed = 1, callback) {
        Validator.validateNumber(speed);
        Validator.validateFunction(callback);

        const delay = this.calculateDelay(speed);

        this._repeater = setInterval(() => {
            this._counter += 1;
            callback(this.getCurrentTime());
        }, delay);
    }

    pause(callback) {
        Validator.validateFunction(callback);

        clearInterval(this._repeater);

        callback(this.getCurrentTime());
    }

    stop(callback) {
        Validator.validateFunction(callback);

        clearInterval(this._repeater);

        callback(this.getCurrentTime());

        this._counter = 0;
    }

    getCurrentTime() {
        return {
            minutes: Math.floor(this._counter / 60),
            seconds: Math.floor(this._counter % 60)
        }
    }

    calculateDelay(speed) {
        const result = 1000 / speed;
        return result > 0 ? result : 1;
    }
}

