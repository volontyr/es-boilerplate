'use strict';

const func = function(iterationsNumber, delay, callback) {
    for (let i = 0; i < iterationsNumber; i++) {
        setTimeout(function() {
            console.log(callback(i));
        }, delay * i);
    }
};

export default func;
