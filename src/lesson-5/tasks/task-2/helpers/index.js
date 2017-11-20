'use strict';

export default ({ id, firstName, surName = 'defaultSurname', secondName, age = 1, sex } = {}) => {

    if (typeof id !== 'number') {
        throw new Error("Object must have id property and it must be a Number");
    }

    if (typeof firstName !== 'string') {
        throw new Error("Object must have firstName property and it must be a String");
    }

    if (typeof secondName !== 'string') {
        throw new Error("Object secondName property must be a String");
    }

    if (typeof age !== 'number') {
        throw new Error("Object age property must be a Number");
    }

    if (age <= 0) {
        throw new Error("Age property must be greater that 0");
    }

    if (typeof sex !== 'string') {
        throw new Error("Object must have sex property and it must be a String");
    }

    if (typeof surName !== 'string') {
        throw new Error("Object surName property must be a String");
    }

    if (!['male', 'female', 'robot'].includes(sex)) {
        throw new Error("Sex property can be one of two values: 'male' or 'female'");
    }
}
