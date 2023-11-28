export const INPUTS = Object.freeze({
  getNumbers: '숫자를 입력해주세요 : ',
  getFlag: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

export const OUTPUTS = Object.freeze({
  startMsg: '숫자 야구 게임을 시작합니다.',

  hintMsg({ ball, strike }) {
    const result = [];

    if (ball) result.push(`${ball}볼`);
    if (strike) result.push(`${strike}스트라이크`);

    return result.length > 0 ? result.join(' ') : '낫싱';
  },

  clearMsg: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

export const ERROR = Object.freeze({
  prefix: '[ERROR]',

  invalidNumbers: '유효하지 않은 숫자입니다.',
  invalidNumberOfDigits: '숫자 3개를 입력해 주세요.',
  duplicatedNumbers: '중복된 숫자는 입력할 수 없습니다.',
});

export const NEW_LINE = '\n';
