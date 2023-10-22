import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";
import { PlayerNumValCheck } from "./ValidationCheck.js";

class App {
    #INITIATE_FLAG = "1";
    #TERMINATE_FLAG = "2";

    constructor() {
        this.computer;
        this.flag = this.#INITIATE_FLAG;
    }

    async play() {
        console.log("숫자 야구 게임을 시작합니다.");
        this.initiateGame();

        while (this.flag !== this.#TERMINATE_FLAG) {
            // 플레이어로부터 숫자 입력 받기
            const playerNum = await Console.readLineAsync(
                "숫자를 입력해주세요 :"
            );
            PlayerNumValCheck(playerNum);

            const hint = this.computer.getHint(playerNum);
            Console.print(hint);

            if (hint === "3스트라이크") {
                await this.gameClear();
            }
        }
    }

    initiateGame() {
        this.computer = new Computer();
        this.computer?.generateRandNum();
    }

    async gameClear() {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        // TODO: /^[12]$/
        this.flag = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );

        if (this.flag === this.#INITIATE_FLAG) {
            return this.computer.generateRandNum();
        }
        Console.print("게임 종료");
    }
}

export default App;
