import {
    DataManager
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const tomas = {
    id: 0,
    firstName: 'Tomas',
    secondName: 'Anderson',
    age: 21,
    sex: 'male'
};
const lisa = {
    id: 1,
    firstName: 'Lisa',
    secondName: 'Black',
    age: 19,
    sex: 'female'
};

const man = new Entity(tomas);
const woman = new Entity(lisa);

// Create data Manager
const dataManager = new DataManager();

// Get data for man
const firstEntity = man.getEntity();

// Get data for woman
const secondEntity = woman.getEntity();

// Add man to collection
dataManager.add(firstEntity);

// Add woman to collection
dataManager.add(secondEntity);

// Get all entities
const all = dataManager.getEntities();
console.log(all);

// Print entities count
const count = dataManager.getCount();
console.log(count);

// Get entity by entity.id
const entityById = dataManager.getEntityById(1);
console.log(entityById);

// Get first entity
const first = dataManager.getFirstEntity();
console.log(first);

// Get last entity
const last = dataManager.getLastEntity();
console.log(last);

// Filter entities by callback
const filtered = dataManager.filter(({ sex, age }) => sex === 'male' && age > 20);

console.log(filtered);
