export class CreateMarkdownDto {
  private _md: string;
  private _name: string;

  public get md(): string {
    return this._md;
  }

  public set md(value: string) {
    this._md = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}
