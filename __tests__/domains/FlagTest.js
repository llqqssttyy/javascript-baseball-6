import Flag from '../../src/domains/Flag.js';

describe('Flag.js 기능 검사', () => {
  test.each([' ', '-', '0', '11'])('validator 테스트', (input) => {
    expect(() => new Flag(input)).toThrow('[ERROR]');
  });
});
