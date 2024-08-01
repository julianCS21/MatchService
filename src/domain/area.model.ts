export class Area {
  private _id: number;
  private _name: string;
  private _code: string;
  private _flag: string;

  constructor(id: number, name: string, code: string, flag: string) {
    this._id = id;
    this._name = name;
    this._code = code;
    this._flag = flag;
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

  get flag(): string {
    return this._flag;
  }

  set flag(value: string) {
    this._flag = value;
  }
}
