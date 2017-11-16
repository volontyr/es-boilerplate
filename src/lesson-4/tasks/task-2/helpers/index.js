'use strict';

export default (arg, expectedType, message) => {
    if (typeof arg !== expectedType) {
        throw new Error(message);
    }
};
