/**
 * A class for the holberton course
 */

export default class HolbertonCourse {
  /**
     *
     * @param {String} name.
     * @param {Number} length
     * @param {Array[String]} students
     */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * The getter method
     */
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * getter for length
   */
  get length() {
    return this._length;
  }

  /**
   * Setter for length
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * getter for students
   */
  get students() {
    return this._students;
  }

  /**
   * setter for students
   */

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
