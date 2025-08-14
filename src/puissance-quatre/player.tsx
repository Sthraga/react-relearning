// player.ts
export class Player {

  private _id: string;
  private _pseudo: string;
  private _color: string;
  private _hasWon: boolean;
  private _score: number;

  constructor(id: string, pseudo: string, color: string) {
    this._id = id;
    this._pseudo = pseudo;
    this._color = color;
    this._hasWon = false;
    this._score = 0;
  }

  // Getters
  get id() {
    return this._id;
  }  
  get pseudo() {
    return this._pseudo;
  }
  get color() {
    return this._color;
  }
  get hasWon() {
    return this._hasWon;
  }
  get score() {
    return this._score;
  }

  // Méthodes
  win() {
    this._hasWon = true;
    this._score++;
  }

  reset() {
    this._hasWon = false;
  }

  resetScore() {
    this._score = 0;
  }
}
