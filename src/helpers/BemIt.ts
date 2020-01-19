
class BemIt {
  /* instance variables */
  private _block: string;
  private _element: string | undefined;
  private _modifier: string | undefined;

  constructor(block: string, ) {
    this._block = block;
  }

  /* getters, setters */
  public get block(): string {
    return this._block;
  }

  public e(element: string): BemIt {
    return this.element(element);
  }

  public element(element: string): BemIt {
    this._element = element;
    return this;
  }

  public m(modifier: string): BemIt {
    return this.modifier(modifier);
  }

  public modifier(modifier: string): BemIt {
    this._modifier = modifier;
    return this;
  }

  public s(): string {
    return this.style();
  }

  public style(): string {
    let styleString = this._block;

    if (this._element) {
      styleString = styleString.concat(`__${this._element}`);
    }

    if (this._modifier) {
      styleString = styleString.concat(`--${this._modifier}`);
    }

    this._element = undefined;
    this._modifier = undefined;

    return styleString;
  }

  public toString() {
    return this.style();
  }
};

export default BemIt;