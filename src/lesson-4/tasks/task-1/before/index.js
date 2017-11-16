'use strict';

import {
    addEntity as add,
    getEntities,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity,
    filter
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    secondName: 'Anderson',
    age: 21,
    sex: 'male'
});

// Create instance for woman
const woman = new Entity({
    id: 1,
    firstName: 'Lisa',
    secondName: 'Black',
    age: 19,
    sex: 'female'
});

// Get data for man
const firstEntity = man.getEntity();

// Get data for woman
const secondEntity = woman.getEntity();

// Add man to collection
add(firstEntity);

// Add woman to collection
add(secondEntity);

// Get all entities
const all = getEntities();

console.log(`all=${JSON.stringify(all, null, 2)}`);

// Print entities count
const count = getCount();

console.log(`count=${count}`);

// Get entity by entity.id
const entityById = getEntityById(0);

console.log(`entityById=${JSON.stringify(entityById, null, 2)}`);

// Get first entity
const first = getFirstEntity();

console.log(`first=${JSON.stringify(first, null, 2)}`);

// Get last entity
const last = getLastEntity();

console.log(`last=${JSON.stringify(last, null, 2)}`);

// Filter entities by callback
const filtered = filter(({ sex, age } = {}) => sex === 'male' && age > 20);

console.log(`filtered=${JSON.stringify(filtered, null, 2)}`);
