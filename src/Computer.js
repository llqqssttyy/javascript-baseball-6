import { MissionUtils } from "@woowacourse/mission-utils";

export class Computer {
    constructor() {
        this.randNumStr = "";
        this.result = {
            ball: 0,
            strike: 0,
            nothing: false,
        };
    }

    generateRandNumStr() {
        const numbers = [];
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        this.randNumStr = numbers.join("");
    }
}
