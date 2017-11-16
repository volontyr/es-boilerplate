'use strict';

import { getEntityById } from "../after/dataManager/index";

export default ({ id, firstName, secondName, age, sex } = {}) => {

    if (typeof id !== 'number') {
        throw new Error("Object must have id property and it must be a Number");
    }

    if (getEntityById(id) !== null) {
        throw new Error(`Object must have unique id property. Such ${id} already exists`);
    }

    if (typeof firstName !== 'string') {
        throw new Error("Object must have firstName property and it must be a String");
    }

    if (typeof secondName !== 'string') {
        throw new Error("Object must have secondName property and it must be a String");
    }

    if (typeof age !== 'number') {
        throw new Error("Object must have age property and it must be a Number");
    }

    if (age <= 0) {
        throw new Error("Age property must be greater than 0");
    }

    if (typeof sex !== 'string') {
        throw new Error("Object must have sex property and it must be a String");
    }

    if (!['male', 'female'].includes(sex)) {
        throw new Error("Sex property can be one of two values: 'male' or 'female'");
    }
}
