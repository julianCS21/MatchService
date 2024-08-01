import { Winner } from './winner.model';

export class Season {
  private _id: number;
  private _startDate: string;
  private _endDate: string;
  private _currentMatchday: number;
  private _winner: Winner;

  constructor(
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number,
    winner: Winner,
  ) {
    this._id = id;
    this._startDate = startDate;
    this._endDate = endDate;
    this._currentMatchday = currentMatchday;
    this._winner = winner;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get currentMatchday(): number {
    return this._currentMatchday;
  }

  set currentMatchday(value: number) {
    this._currentMatchday = value;
  }

  get winner(): Winner {
    return this._winner;
  }

  set winner(value: Winner) {
    this._winner = value;
  }
}
