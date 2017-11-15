export default () => {
    let sum = 0;
    return (arg = 0) => {
        if (typeof arg !== 'number') {
            throw new Error(`Function argument must be a Number. '${typeof arg}' was used instead`);
        }

        sum += arg;
        return sum;
    }
};
