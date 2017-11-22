'use strict';

import validator from '../../helpers';

export function DataManager() {
    this.allEntities = [];

    this.add = (entity) => {
        validator(entity);

        if (this.getEntityById(entity.id) !== null) {
            throw new Error(`Object must have unique id property. Entity with id ${ entity.id } already exists`);
        }

        this.allEntities.push(entity);
    };

   this.getEntities = () => {
        return this.allEntities;
    };

    this.getCount = () => {
        const result = this.allEntities.length;

        return result;
    };

    this.getEntityById = (id) => {
        const filtered = this.allEntities.filter((item) =>
            item.id === id
        );

        const result = filtered.length ? filtered[0] : null;

        return result;
    };

    this.getFirstEntity = () => {
        const first = this.allEntities.length ? this.allEntities[0] : null;

        return first;
    };

    this.getLastEntity = () => {
        const last = this.allEntities.length ? this.allEntities[this.allEntities.length - 1] : null;

        return last;
    };

    this.filter = (filter) => {
        const result = this.allEntities.filter((item) =>
            filter(item)
        );

        return result.length ? result : null;
    };

    this.getEntitiesSortedByPopularity = () => {
        return this.allEntities.sort((prev, next) => {
            const viewsPrev = this.getEntityTotalViews(prev.id),
                viewsNext = this.getEntityTotalViews(next.id);

            return viewsPrev > viewsNext ? -1 : viewsPrev < viewsNext ? 1 : 0;
        });
    };

    this.getEntityTotalViews = (id, exactSocials, callback) => {
        const entity = this.getEntityById(id);
        const socials = entity.social;

        if (entity !== null) {
            let result = 0;

            if (!exactSocials || exactSocials === null) {
                result += this.countViews(socials);
            } else {
                exactSocials.forEach(item => {
                    let filteredSocials;
                    if (typeof item === 'number') {
                        filteredSocials = this.filterSocial(socials, ({id} = {}) => id === item);
                    } else if (typeof item === 'string') {
                        filteredSocials = this.filterSocial(socials, ({title} = {}) => title === item);
                    }

                    if (filteredSocials !== undefined) {
                        result += this.countViews(filteredSocials);
                    }
                });
            }

            if (typeof callback === 'function') {
                return callback(result);
            } else {
                return result;
            }
        }

        return null;
    };

    this.filterSocial = (social, callback) => {
        return social.filter(callback);
    };

    this.countViews = (social) => {
        return social.reduce((sum, { views }) => sum + views, 0);
    };
}
