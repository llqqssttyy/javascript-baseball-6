import Computer from './domains/Computer.js';

import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

import Flag from './domains/Flag.js';

class App {
  #computer;

  #inputView;

  #outputView;

  constructor() {
    this.#computer = new Computer();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    this.#outputView.printStartMessage();

    await this.#playRound();
  }

  async #playRound() {
    this.#computer.generateAnswer();

    while (!this.#computer.isGameOver) {
      this.#computer.playerNumbers = await this.#inputView.getNumbers();
      this.#outputView.printHint(this.#computer.hint);
    }

    await this.#handleGameClear();
  }

  async #handleGameClear() {
    this.#outputView.printGameClear();

    const flag = new Flag(await this.#inputView.getFlag());

    if (flag.isTerminateFlag) {
      return this.#outputView.printTerminate();
    }

    this.#computer.clear();
    await this.#playRound();
  }
}

export default App;
