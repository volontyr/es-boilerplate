export function tag(literals, ...salary) {
    let result = '';

    for (let i = 0; i < literals.length - 1; i++) {
        result += literals[i];
        result += `${salary[i].amount}, and it will be paid in ${salary[i].currency}!`;
    }

    result += literals[literals.length - 1];

    return result;
}
