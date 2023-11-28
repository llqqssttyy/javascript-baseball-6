import BullsAndCows from './services/BullsAndCows.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #bullsAndCows;

  #inputView;

  #outputView;

  constructor() {
    this.#bullsAndCows = new BullsAndCows();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    this.#outputView.printStartMessage();
  }
}

export default App;
