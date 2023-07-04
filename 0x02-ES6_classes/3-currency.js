/**
 * A class for Money
 */

export default class Currency {
  /**
     * constructor setup.
     * @param {String} code.
     * @param {String} name.
     */

  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the code
   */

  get code() {
    return this._code;
  }

  /**
   * Setter for the code
   */

  set code(value) {
    this._code = value;
  }

  /**
   * Getter for name
   */

  get name() {
    return this._name;
  }

  /**
   * Setter for name
   */

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
