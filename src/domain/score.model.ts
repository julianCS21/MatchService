export class Score {
  private _winner: string;
  private _duration: string;
  private _fullTime: { home: number; away: number };
  private _halfTime: { home: number; away: number };

  constructor(
    winner: string,
    duration: string,
    fullTime: { home: number; away: number },
    halfTime: { home: number; away: number },
  ) {
    this._winner = winner;
    this._duration = duration;
    this._fullTime = fullTime;
    this._halfTime = halfTime;
  }

  get winner(): string {
    return this._winner;
  }

  set winner(value: string) {
    this._winner = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get fullTime(): { home: number; away: number } {
    return this._fullTime;
  }

  set fullTime(value: { home: number; away: number }) {
    this._fullTime = value;
  }

  get halfTime(): { home: number; away: number } {
    return this._halfTime;
  }

  set halfTime(value: { home: number; away: number }) {
    this._halfTime = value;
  }
}
