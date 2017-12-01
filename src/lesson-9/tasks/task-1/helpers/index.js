'use strict';

export const Validator = class {

    static validateNumber(arg) {
        if (typeof arg !== 'number') {
            throw new Error(`Argument ${ arg } is not a Number`);
        }
    }

    static validateFunction(arg) {
        if (typeof arg !== 'function') {
            throw new Error(`Argument ${ arg } is not a Function`);
        }
    }
};
