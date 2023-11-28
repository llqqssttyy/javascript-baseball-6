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

    while (true) {
      this.#computer.generateAnswer();
      break;
    }
  }
}

export default App;
