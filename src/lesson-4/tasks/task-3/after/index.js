'use strict';

export const getInfo = ({ arr0 = [], arr1 = [], arr2 = [] } = {}) => {
    const arrResult = [...arr0, ...arr1, ...arr2];

    return {
        length: arrResult.length,
        max: Math.max(...arrResult),
        min: Math.min(...arrResult)
    };
};
