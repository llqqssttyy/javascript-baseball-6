import { ERROR } from '../constants/messages.js';

import throwError from '../utils/throwError.js';
import {
  hasDuplicatedNumbers,
  hasThreeNumbers,
  isValidNumbers,
} from '../utils/validator.js';

class Numbers {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);

    this.#numbers = numbers.split('').map((num) => Number(num));
  }

  #validate(numbers) {
    const { invalidNumbers, invalidNumberOfDigits, duplicatedNumbers } = ERROR;

    if (!isValidNumbers(numbers)) throwError(invalidNumbers);

    if (!hasThreeNumbers(numbers)) throwError(invalidNumberOfDigits);

    if (hasDuplicatedNumbers(numbers)) throwError(duplicatedNumbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Numbers;
