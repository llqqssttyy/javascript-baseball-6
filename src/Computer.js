import { Console, MissionUtils } from '@woowacourse/mission-utils';

export class Computer {
  constructor() {
    this.randNum = '';
  }

  // 랜덤한 세 자리 숫자 생성 및 저장
  generateRandNum() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.randNum = numbers.join('');
  }

  // strike와 ball의 개수를 세어 object로 반환
  getCnt(playerNum) {
    let strike = 0;
    let ball = 0;

    // 힌트 카운트
    playerNum.split('').forEach((num, idx) => {
      if (this.randNum[idx] === num) strike++;
      else if (this.randNum.includes(num)) ball++;
    });

    return { strike: strike, ball: ball };
  }

  // getCnt의 반환값을 바탕으로 힌트 문구를 생성하여 반환
  getHint(playerNum) {
    const { strike, ball } = this.getCnt(playerNum);

    const result = [];
    if (ball) {
      result.push(`${ball}볼`);
    }
    if (strike) {
      result.push(`${strike}스트라이크`);
    }

    const hint = result.length > 0 ? result.join(' ') : '낫싱';
    Console.print(hint);

    return hint;
  }
}
