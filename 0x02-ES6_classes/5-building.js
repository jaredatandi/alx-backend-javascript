export default class Building {
  /**
     *A class to implement a building.
     * @param {number} sqft.
     */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Buildign must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Getter method for sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter method for sqft.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
