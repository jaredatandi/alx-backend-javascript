import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     *  An extension of building class
     * @param {number} sqft.
     * @param {number} floors.
     */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Getter method for floors
   */
  get floors() {
    return this._floors;
  }

  /**
   * Setter method fo floor
   */

  set floors(value) {
    this._floors = value;
  }

  /**
   * Evacuation override
   */

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
