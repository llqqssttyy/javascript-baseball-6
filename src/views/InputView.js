import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../constants/messages.js';

class InputView {
  async #getInput(msg) {
    const input = await Console.readLineAsync(msg);
    return input;
  }

  getNumbers() {
    return this.#getInput(INPUTS.getNumbers);
  }

  getFlag() {
    return this.#getInput(INPUTS.getFlag);
  }
}

export default InputView;
