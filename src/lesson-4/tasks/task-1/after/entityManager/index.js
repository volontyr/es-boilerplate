'use strict';

import validator from '../../helpers';

const Entity = function({ id, firstName, secondName, age, sex } = {}) {
    validator(arguments[0]);

    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.sex = sex;
};

Entity.prototype.getEntity = function() {
    return {
        id: this.id,
        firstName: this.firstName,
        secondName: this.secondName,
        age: this.age,
        sex: this.sex
    };
};

export default Entity;
