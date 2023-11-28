import { NUMBERS } from '../constants/constants.js';

// Numbers.js 검증
export const isValidNumbers = (str) => {
  const regex = new RegExp(/^[1-9]+$/);
  return regex.test(str);
};

export const hasThreeNumbers = (str) => {
  const numbers = str.split('');
  return numbers.length === NUMBERS.maxCnt;
};

export const hasDuplicatedNumbers = (str) => {
  const numbers = new Set(str.split(''));
  return numbers.size !== NUMBERS.maxCnt;
};
