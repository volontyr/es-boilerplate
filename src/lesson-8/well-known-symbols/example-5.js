'use strict';

function Temperature(degrees) {
    this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint) {
    switch (hint) {
        case 'string':
            return `${this.degrees}\u00b0`;
        case 'number':
            return this.degrees;
        default:
            return `${this.degrees} degrees`;
    }
};

const freezing = new Temperature(32);

console.log(freezing + '!'); // [object Object]! → // 32 degrees!
console.log(freezing / 2); // NaN → // 16
console.log(String(freezing)); // [object Object] → // 32°

const a = 2;
