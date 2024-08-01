export class Competition {
  private _id: number;
  private _name: string;
  private _code: string;
  private _type: string;
  private _emblem: string;

  constructor(
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string,
  ) {
    this._id = id;
    this._name = name;
    this._code = code;
    this._type = type;
    this._emblem = emblem;
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

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get emblem(): string {
    return this._emblem;
  }

  set emblem(value: string) {
    this._emblem = value;
  }
}
