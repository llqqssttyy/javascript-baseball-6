import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer";

class App {
    // flag에 들어갈 값을 상수로 정의
    #INITIATE_FLAG = 1;
    #TERMINATE_FLAG = 2;

    constructor() {
        this.computer;
        this.flag = this.#INITIATE_FLAG;
    }

    async play() {
        while (this.flag === this.#INITIATE_FLAG) {
            this.initiateGame();

            this.flag = this.#TERMINATE_FLAG;
        }
    }

    initiateGame() {
        this.computer = new Computer();
        this.computer?.generateRandNumStr();

        Console.print("숫자 야구 게임을 시작합니다.");
    }

    getUserNum() {}
}

export default App;
