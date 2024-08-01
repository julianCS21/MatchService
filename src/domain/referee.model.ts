export class Referee {
  private _id: number;
  private _name: string;
  private _type: string;
  private _nationality: string;

  constructor(id: number, name: string, type: string, nationality: string) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._nationality = nationality;
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get nationality(): string {
    return this._nationality;
  }

  set nationality(value: string) {
    this._nationality = value;
  }
}
