'use strict';

import validator from '../../helpers';

const Entity = function(obj) {
    validator(obj);

    this.id = obj.id;
    this.firstName = obj.firstName;
    this.secondName = obj.secondName;
    this.age = obj.age;
    this.sex = obj.sex;
    this.social = obj.social;
};

Entity.prototype.getEntity = function() {
    return {
        id: this.id,
        firstName: this.firstName,
        secondName: this.secondName,
        age: this.age,
        sex: this.sex,
        social: this.social
    };
};

export default Entity;
