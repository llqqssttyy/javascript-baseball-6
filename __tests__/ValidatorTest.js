import { validateFlag, validatePlayerNumber } from '../src/ValidationCheck.js';

describe('입력 유효성 검사', () => {
  it('범위 내 숫자가 아닌 다른 문자를 입력했을 때', () => {
    expect(() => validatePlayerNumber('abc')).toThrowError(
      '[ERROR] 입력 값은 1부터 9까지의 숫자입니다.'
    );
  });

  it('범위 내 숫자가 아닌 다른 문자를 입력했을 때', () => {
    expect(() => validatePlayerNumber('011')).toThrowError(
      '[ERROR] 입력 값은 1부터 9까지의 숫자입니다.'
    );
  });

  it('숫자 3개를 입력하지 않았을 때', () => {
    expect(() => validatePlayerNumber('12345')).toThrowError(
      '[ERROR] 입력 값은 세 자리 숫자입니다.'
    );
  });

  it('숫자 3개를 입력하지 않았을 때', () => {
    expect(() => validatePlayerNumber('12')).toThrowError(
      '[ERROR] 입력 값은 세 자리 숫자입니다.'
    );
  });

  it('중복된 숫자를 입력했을 때', () => {
    expect(() => validatePlayerNumber('112')).toThrowError(
      '[ERROR] 중복된 숫자입니다.'
    );
  });
});

describe('게임 진행 여부 유효성 검사', () => {
  it('1 또는 2가 아닌 다른 문자를 입력했을 때', () => {
    expect(() => validateFlag('0')).toThrowError(
      '[ERROR] 입력 가능한 문자는 1 또는 2입니다.'
    );
  });

  it('1과 2를 같이 입력했을 때', () => {
    expect(() => validateFlag('12')).toThrowError(
      '[ERROR] 입력 가능한 문자는 1 또는 2입니다.'
    );
  });

  it('1과 2를 같이 입력했을 때', () => {
    expect(() => validateFlag('21')).toThrowError(
      '[ERROR] 입력 가능한 문자는 1 또는 2입니다.'
    );
  });
});
