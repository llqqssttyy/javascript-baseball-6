import { PlayerNumValCheck } from "../src/ValidationCheck.js";

describe("입력 유효성 검사", () => {
    it("범위 내 숫자가 아닌 다른 문자를 입력했을 때", () => {
        expect(() => PlayerNumValCheck("abc")).toThrowError(
            "[ERROR] 입력 가능한 문자는 1부터 9까지의 숫자입니다."
        );
    });

    it("범위 내 숫자가 아닌 다른 문자를 입력했을 때", () => {
        expect(() => PlayerNumValCheck("011")).toThrowError(
            "[ERROR] 입력 가능한 문자는 1부터 9까지의 숫자입니다."
        );
    });

    it("숫자 3개를 입력하지 않았을 때", () => {
        expect(() => PlayerNumValCheck("12345")).toThrowError(
            "[ERROR] 입력 값은 세 자리 숫자입니다."
        );
    });

    it("숫자 3개를 입력하지 않았을 때", () => {
        expect(() => PlayerNumValCheck("12")).toThrowError(
            "[ERROR] 입력 값은 세 자리 숫자입니다."
        );
    });

    it("중복된 숫자를 입력했을 때", () => {
        expect(() => PlayerNumValCheck("112")).toThrowError(
            "[ERROR] 중복된 숫자입니다."
        );
    });
});
