const ERR_PREFIX = "[ERROR]";
function throwError(message) {
    throw new Error(`${ERR_PREFIX} ${message}`);
}

export function PlayerNumValCheck(playerNum) {
    // 문자열 중복 검사 로직
    const isDuplicated = (playerNum) => {
        const charSet = new Set();

        for (const char of playerNum) {
            if (charSet.has(char)) return true;
            charSet.add(char);
        }
    };

    // throw error
    if (!/^[1-9]+$/.test(playerNum)) {
        throwError("입력 가능한 문자는 1부터 9까지의 숫자입니다.");
    } else if (playerNum.length !== 3) {
        throwError("입력 값은 세 자리 숫자입니다.");
    } else if (isDuplicated(playerNum)) {
        throwError("중복된 숫자입니다.");
    } else {
        return playerNum;
    }
}
