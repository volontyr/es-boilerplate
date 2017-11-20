'use strict';

import validator from '../../task-2/helpers';

export function Entity(obj) {
    validator(obj);

    this.id = obj.id;
    this.firstName = obj.firstName;
    this.surName = obj.surName;
    this.secondName = obj.secondName;
    this.sex = obj.sex;
}

export const talk = {
    say() {
        console.log("Hi!")
    },
    sayAge() {
        if (typeof this.age === 'undefined') {
            console.log('hm undefined? Lets fix it...');
        } else {
            console.log(`I'm ${ this.age } years old.`);
        }
    }
};

export const age = {
    fixAge(age) {
        this.age = age;
        console.log(`Now I'm ${ age } years old...`);
    }
};
