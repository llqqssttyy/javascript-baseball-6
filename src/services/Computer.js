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

  set playerNumbers(numbers) {
    this.#playerNumbers = new Numbers(numbers);
  }

  get isGameOver() {
    return this.hint.strike === 3;
  }

  get hint() {
    const state = {
      answer: [...this.#answer],
      playerNumbers: this.#playerNumbers.numbers,
    };

    return {
      ball: this.#countMatchedNumbers({ ...state, isStrike: false }),
      strike: this.#countMatchedNumbers({ ...state, isStrike: true }),
    };
  }

  #countMatchedNumbers({ answer, playerNumbers, isStrike }) {
    return playerNumbers.reduce((cnt, number, index) => {
      const isMatch = answer.includes(number) && answer.indexOf(number) === index;

      return cnt + (isMatch === isStrike);
    }, 0);
  }
}

export default Computer;
