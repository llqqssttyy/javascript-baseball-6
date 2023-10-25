import { hasDuplicatedChar } from './utilities/StringUtils.js';

function throwError(message = '') {
  const ERR_PREFIX = '[ERROR]';
  throw new Error(`${ERR_PREFIX} ${message}`);
}

export function validatePlayerNumber(playerNum) {
  const rangeRegex = new RegExp(/^[1-9]+$/);

  if (!rangeRegex.test(playerNum))
    throwError(`입력 값은 1부터 9까지의 숫자입니다.`);
  else if (playerNum.length !== 3) throwError(`입력 값은 세 자리 숫자입니다.`);
  else if (hasDuplicatedChar(playerNum)) throwError(`중복된 숫자입니다.`);
  else return playerNum;
}

export function validateFlag(flag) {
  const regex = new RegExp(/^[12]$/);

  if (!regex.test(flag)) throwError(`입력 가능한 문자는 1 또는 2입니다.`);
  else return flag;
}
