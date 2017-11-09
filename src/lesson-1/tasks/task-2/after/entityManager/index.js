'use strict';

const Entity = function(obj) {
    this.obj = obj;
};

Entity.prototype.getEntity = function() {
    return this.obj;
};

export default Entity;
