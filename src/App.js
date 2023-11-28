import Computer from './domains/Computer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

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

    await this.#playBullsAndCows();
  }

  async #playBullsAndCows() {
    this.#computer.generateAnswer();

    while (!this.#computer.isGameOver) {
      this.#computer.playerNumbers = await this.#inputView.getNumbers();
      this.#outputView.printHint(this.#computer.hint);
    }

    this.#handleGameClear();
  }

  async #handleGameClear() {
    this.#outputView.printGameClear();

    const flag = Number(await this.#inputView.getFlag());

    if (flag === 1) {
      this.#computer.clear();
      this.#playBullsAndCows();
    }
  }

  #validateFlag(flag) {}
}

export default App;
