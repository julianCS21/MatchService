import { Team } from './team.model';

export class Winner extends Team {
  private _address: string;
  private _website: string;
  private _founded: number;
  private _clubColors: string;
  private _venue: string;
  private _lastUpdated: string;

  constructor(
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    address: string,
    website: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string,
  ) {
    super(id, name, shortName, tla, crest);
    this._address = address;
    this._website = website;
    this._founded = founded;
    this._clubColors = clubColors;
    this._venue = venue;
    this._lastUpdated = lastUpdated;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get founded(): number {
    return this._founded;
  }

  set founded(value: number) {
    this._founded = value;
  }

  get clubColors(): string {
    return this._clubColors;
  }

  set clubColors(value: string) {
    this._clubColors = value;
  }

  get venue(): string {
    return this._venue;
  }

  set venue(value: string) {
    this._venue = value;
  }

  get lastUpdated(): string {
    return this._lastUpdated;
  }

  set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
}
