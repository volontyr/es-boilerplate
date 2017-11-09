'use strict';

let allEntities = new Map();

export function addEntity(entity) {
    allEntities.set(entity.id, entity);
}

export function getEntities() {
    return Array.from(allEntities.values());
}

export function getCount() {
    return allEntities.size;
}

export function getEntityById(id) {
    const result = allEntities.get(id);
    return result !== undefined ? result : {};
}

export function getFirstEntity() {
    return allEntities.size > 0 ? allEntities.values().next().value : {};
}

export function getLastEntity() {
    return allEntities.size > 0 ? Array.from(allEntities.values()).pop() : {};
}

export function filter(filter) {
    const entities = allEntities.values();
    const result = [];
    for (let entity of entities) {
        if (filter(entity)) {
            result.push(entity);
        }
    }
    return result;
}
