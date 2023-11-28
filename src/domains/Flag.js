import throwError from '../utils/throwError.js';
import { isValidFlag } from '../utils/validator.js';

import { ERROR } from '../constants/messages.js';
import { TERMINATE_FLAG } from '../constants/constants.js';

class Flag {
  #flag;

  constructor(flag) {
    this.#validate(flag);
    this.#flag = Number(flag);
  }

  #validate(flag) {
    if (!isValidFlag(flag)) throwError(ERROR.invalidFlag);
  }

  get isTerminateFlag() {
    return this.#flag === TERMINATE_FLAG;
  }
}

export default Flag;
