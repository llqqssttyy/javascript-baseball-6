export const INPUTS = Object.freeze({
  getNumbers: '숫자를 입력해주세요 : ',
  getFlag: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

export const OUTPUTS = Object.freeze({
  startMsg: '숫자 야구 게임을 시작합니다.',

  resultMsg({ ball, strike }) {
    if (ball === 0 && strike === 0) return '낫싱\n';

    return `${ball}볼 ${strike}스트라이크\n`;
  },

  clearMsg: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
});

export const NEW_LINE = '\n';
