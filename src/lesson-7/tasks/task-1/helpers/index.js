'use strict';

export default ({ id, firstName, secondName, age, sex, social: socials = [] } = {}) => {

    validateNumber(id);

    validateString(firstName);

    validateString(secondName);

    validateNumber(age);

    if (age <= 0) {
        throw new Error('Age property must be greater that 0');
    }

    validateString(sex);

    if (!['male', 'female'].includes(sex)) {
        throw new Error("Sex property can be one of two values: 'male' or 'female'");
    }

    if (!Array.isArray(socials)) {
        throw new Error(`${ socials } was expected to be an array`);
    }

    socials.forEach(({ id, title, views } = {}) => {
        validateNumber(id);
        validateString(title);
        validateNumber(views);
    });
}

const validateFunction = (func) => {
    if (typeof func !== 'function') {
        throw new Error(`${ func } was expected to be a function`);
    }
};

const validateNumber = (arg) => {
    if (typeof arg !== 'number') {
        throw new Error(`${ arg } was expected to be a Number`);
    }
};

const validateString = (arg) => {
    if (typeof arg !== 'string') {
        throw new Error(`${ arg } was expected to be a String`);
    }
};
