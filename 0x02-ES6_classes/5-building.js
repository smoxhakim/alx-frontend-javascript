export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building
          && !Object.prototype.hasOwnProperty.call(this.constructor.prototype, 'evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
