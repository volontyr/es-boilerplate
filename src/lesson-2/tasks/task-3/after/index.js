export function format(func) {
    let result = "";
    for (let i = 0; i < func.length; i++) {
        result = result + `\\u${func.charCodeAt(i).toString(16)}`;
    }
    return result;
}
