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
    const answer = [...this.#answer];
    const playerNumbers = this.#playerNumbers.numbers;

    return {
      ball: this.#findBall(answer, playerNumbers),
      strike: this.#findStrike(answer, playerNumbers),
    };
  }

  #findBall(answer, playerNumbers) {
    return playerNumbers.reduce((balls, number) => {
      if (
        answer.includes(number) &&
        answer.indexOf(number) !== playerNumbers.indexOf(number)
      ) {
        return balls + 1;
      }

      return balls;
    }, 0);
  }

  #findStrike(answer, playerNumbers) {
    return playerNumbers.reduce((strikes, number) => {
      if (
        answer.includes(number) &&
        answer.indexOf(number) === playerNumbers.indexOf(number)
      )
        return strikes + 1;

      return strikes;
    }, 0);
  }
}

export default Computer;
