'use strict';

export default (iterationsNumber = 10, delay = 1000, callback = (val) => val) => {
    if (typeof iterationsNumber !== 'number') {
        throw new Error("First argument must be a Number");
    }

    if (typeof delay !== 'number') {
        throw new Error("Second argument must be a Number");
    }

    if (typeof callback !== 'function') {
        throw new Error("Third argument must be a Function");
    }

    for (let i = 0; i < iterationsNumber; i++) {
        setTimeout(() =>
            console.log(callback(i)), delay * i
        );
    }
};
