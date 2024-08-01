export class Team {
  private _id: number;
  private _name: string;
  private _shortName: string;
  private _tla: string;
  private _crest: string;

  constructor(
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
  ) {
    this._id = id;
    this._name = name;
    this._shortName = shortName;
    this._tla = tla;
    this._crest = crest;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get shortName(): string {
    return this._shortName;
  }

  set shortName(value: string) {
    this._shortName = value;
  }

  get tla(): string {
    return this._tla;
  }

  set tla(value: string) {
    this._tla = value;
  }

  get crest(): string {
    return this._crest;
  }

  set crest(value: string) {
    this._crest = value;
  }
}
