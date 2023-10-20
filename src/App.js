import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer";

class App {
    constructor() {
        this.computer = new Computer();
        this.gameFlag = 1;
    }

    async play() {
        while (this.gameFlag) {
            this.computer.generateRandNumStr();

            this.gameFlag = 0;
        }
    }
}

export default App;
