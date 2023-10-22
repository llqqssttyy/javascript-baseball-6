const ERR_PREFIX = "[ERROR]";
function throwError(message) {
    throw new Error(`${ERR_PREFIX} ${message}`);
}

function isDuplicated(str) {
    const charSet = new Set();

    for (const char of str) {
        if (charSet.has(char)) return true;
        charSet.add(char);
    }
}

export function ValidatePlayerNumber(playerNum) {
    const rangeRegex = new RegExp(/^[1-9]+$/);

    // throw error
    if (!rangeRegex.test(playerNum))
        throwError(`입력 가능한 문자는 1부터 9까지의 숫자입니다.`);
    else if (playerNum.length !== 3)
        throwError(`입력 값은 세 자리 숫자입니다.`);
    else if (isDuplicated(playerNum)) throwError(`중복된 숫자입니다.`);
    else return playerNum;
}

export function ValidateFlag(flag) {
    const regex = new RegExp(/^[12]$/);

    if (!regex.test(flag)) throwError(`입력 가능한 문자는 1 또는 2입니다.`);
    else return flag;
}
