'use strict';

import validator from '../../helpers';

export const DataManager = function() {
    this.allEntities = [];
};

DataManager.prototype.add = function(entity) {
    validator(entity);

    if (this.getEntityById(entity.id) !== null) {
        throw new Error(`Object must have unique id property. Entity with id ${ entity.id } already exists.`);
    }

    this.allEntities.push(entity);
};

DataManager.prototype.getEntities = function() {
    return this.allEntities;
};

DataManager.prototype.getCount = function() {
    const result = this.allEntities.length;

    return result;
};

DataManager.prototype.getEntityById = function(id) {
    const filtered = this.allEntities.filter((item) =>
        item.id === id
    );

    const result = filtered.length ? filtered : null;

    return result;
};

DataManager.prototype.getFirstEntity = function() {
    const first = this.allEntities.length ? this.allEntities[0] : null;

    return first;
};

DataManager.prototype.getLastEntity = function() {
    const last = this.allEntities.length ? this.allEntities[this.allEntities.length - 1] : null;

    return last;
};

DataManager.prototype.filter = function(filter) {
    const result = this.allEntities.filter((item) =>
        filter(item)
    );

    return result.length ? result : null;
};
