import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

class Computer {
  #answer;

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
}

export default Computer;
