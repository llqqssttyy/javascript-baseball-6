import { MissionUtils } from "@woowacourse/mission-utils";

export class Computer {
    constructor() {
        this.randNum = "";
    }

    generateRandNum() {
        const numbers = [];
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        this.randNum = numbers.join("");
    }

    getCnt(playerNum) {
        let strike = 0;
        let ball = 0;

        // 힌트 카운트
        playerNum.split("").map((num, idx) => {
            if (this.randNum[idx] === num) {
                strike++;
            } else if (this.randNum.includes(num)) {
                ball++;
            }
        });
        return { strike: strike, ball: ball };
    }
}
