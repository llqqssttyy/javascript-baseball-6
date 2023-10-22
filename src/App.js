import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";
import { validateFlag, validatePlayerNumber } from "./ValidationCheck.js";

class App {
    #INITIATE_FLAG = "1";
    #TERMINATE_FLAG = "2";

    constructor() {
        this.computer = null;
        this.flag = this.#INITIATE_FLAG;
    }

    async play() {
        console.log("숫자 야구 게임을 시작합니다.");
        this.initiateGame();

        while (this.flag !== this.#TERMINATE_FLAG) {
            const playerNum = validatePlayerNumber(
                await Console.readLineAsync("숫자를 입력해주세요 :")
            );

            const hint = this.computer.getHint(playerNum);
            Console.print(hint);

            if (hint === "3스트라이크") {
                await this.gameClear();
            }
        }
    }

    // 게임 초기화
    initiateGame() {
        this.computer = new Computer();
        this.computer?.generateRandNum();
    }

    // 게임 클리어 시 진행 여부를 입력받아 처리
    async gameClear() {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.flag = validateFlag(
            await Console.readLineAsync(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            )
        );

        if (this.flag === this.#TERMINATE_FLAG) {
            return Console.print("게임 종료");
        }
        this.initiateGame();
    }
}

export default App;
