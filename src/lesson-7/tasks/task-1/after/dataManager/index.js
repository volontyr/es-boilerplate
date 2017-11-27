'use strict';

import validator from '../../helpers';

export const DataManager = (function() {

    function DataManager() {
        const allEntities = new Map();

        this.add = (entity) => {
            validator(entity);

            allEntities.set(entity.id, entity);
        };

        this.getEntities = () => {
            return Array.from(allEntities.values());
        };

        this.getCount = () => {
            const result = allEntities.size;

            return result;
        };

        this.getEntityById = (id) => {
            allEntities.get(id);

            return allEntities.has(id) ? allEntities.get(id) : null;
        };

        this.getFirstEntity = () => {
            return allEntities.size ? [...allEntities.values()][0] : null;
        };

        this.getLastEntity = () => {
            const lastIndex = allEntities.size - 1;
            return lastIndex >= 0 ? [...allEntities.values()][lastIndex] : null;
        };

        this.filter = (filter) => {
            const result = [...allEntities.values()].filter((item) =>
                filter(item)
            );

            return result.length ? result : null;
        };
    }

    return DataManager;
})();
