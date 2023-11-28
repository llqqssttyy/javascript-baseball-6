import Computer from './services/Computer.js';
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
    while (true) {
      this.#computer.generateAnswer();

      this.#computer.playerNumbers = await this.#inputView.getNumbers();
      this.#outputView.printHint(this.#computer.hint);

      break;
    }
  }
}

export default App;
