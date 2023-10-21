import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";
import { PlayerNumValCheck } from "./ValidationCheck.js";

class App {
    // flag에 들어갈 값을 상수로 정의
    #INITIAL_FLAG = 1;
    #TERMINATE_FLAG = 2;

    constructor() {
        this.computer;
        this.flag = this.#INITIAL_FLAG;
    }

    async play() {
        Console.print("숫자 야구 게임을 시작합니다.");
        this.initiateGame();

        while (this.flag === this.#INITIAL_FLAG) {
            const playerNum = PlayerNumValCheck(
                await Console.readLineAsync("숫자를 입력해주세요 :")
            );

            this.flag = this.#INITIAL_FLAG;
        }
    }

    initiateGame() {
        this.computer = new Computer();
        this.computer?.generateRandNumStr();
    }
}

export default App;
