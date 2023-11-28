import Numbers from '../../src/domains/Numbers';

describe('Numbers.js 기능 검사', () => {
  test.each([' ', '---', '012', '112', '2'])('validator 테스트', (input) => {
    expect(() => new Numbers(input)).toThrow('[ERROR]');
  });
});
