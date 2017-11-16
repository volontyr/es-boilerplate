'use strict';

import validator from '../../helpers';

const allEntities = [];

export const addEntity = (entity) => {
    validator(entity);

    allEntities.push(entity);
};

export const getEntities = () => {
    return allEntities;
};

export const getCount = () => {
    const result = allEntities.length;

    return result;
};

export const getEntityById = (id) => {
    const filtered = allEntities.filter(({ id: itemId } = {}) =>
        itemId === id
    );

    const result = filtered.length ? filtered : null;

    return result;
};

export const getFirstEntity = () => {
    const first = allEntities.length ? allEntities[0] : null;

    return first;
};

export const getLastEntity = () => {
    const last = allEntities.length ? allEntities[allEntities.length - 1] : null;

    return last;
};

export const filter = (filter) => {
    const result = allEntities.filter((item) =>
        filter(item)
    );

    return result.length ? result : null;
};
