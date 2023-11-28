import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';
import Numbers from '../domains/Numbers.js';

class Computer {
  #answer;

  #playerNumbers;

  constructor() {
    this.#answer = new Set();
  }

  generateAnswer() {
    const { maxCnt, min, max } = NUMBERS;

    while (this.#answer.size < maxCnt) {
      const number = MissionUtils.Random.pickNumberInRange(min, max);
      this.#answer.add(number);
    }
  }

  clearAnswer() {
    this.#answer.clear();
  }

  setPlayerNumbers(numbers) {
    this.#playerNumbers = new Numbers(numbers);
  }

  get hint() {}

  get isGameOver() {
    return this.hint.strike === 3;
  }
}

export default Computer;
