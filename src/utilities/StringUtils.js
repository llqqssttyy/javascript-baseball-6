export function hasDuplicatedChar(str = "") {
    const charSet = new Set();

    for (const char of str) {
        if (charSet.has(char)) return true;
        charSet.add(char);
    }
    return false;
}
