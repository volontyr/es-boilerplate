export function findString(text, pattern) {
    let result = 0;
    let lastIndex = 0;

    while (lastIndex < text.length) {
        if (pattern.exec(text) === null) {
            lastIndex++;
            pattern.lastIndex = lastIndex;
        } else {
            lastIndex = pattern.lastIndex;
            result++;
        }
    }
    return result;
}
