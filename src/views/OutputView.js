import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  printStartMessage() {
    Console.print(OUTPUTS.startMsg);
  }
}

export default OutputView;
