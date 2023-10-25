import { Console } from '@woowacourse/mission-utils';
import { Computer } from './Computer.js';
import { validateFlag, validatePlayerNumber } from './ValidationCheck.js';
import { FLAGS } from './constants/constants.js';

class App {
  constructor() {
    this.computer = new Computer();
    this.flag = FLAGS.INITIATE;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();

    while (this.flag !== FLAGS.TERMINATE) {
      const playerNum = await this.getInputWithValidator(
        '숫자를 입력해주세요 : ',
        validatePlayerNumber
      );

      const hint = this.computer.getHint(playerNum);
      if (hint === '3스트라이크') {
        await this.handleGameClear();
      }
    }
  }

  // 게임 클리어 시 진행 여부를 입력받아 처리
  async handleGameClear() {
    this.printGameClearMsg();

    const userInput = await this.getInputWithValidator('', validateFlag);

    if (userInput === FLAGS.TERMINATE) {
      return this.terminate();
    }
    this.init();
  }

  init() {
    this.computer?.generateRandNum();
  }

  terminate() {
    this.flag = FLAGS.TERMINATE;
    Console.print('게임 종료');
  }

  printGameClearMsg() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  async getInputWithValidator(msg, validator = (input) => input) {
    return validator(await Console.readLineAsync(msg));
  }
}

export default App;
