interface RationalNumber {
  numer: number;
  denom: number;
}

class RationalNumber {
  constructor(
    public numer: number,
    public denom: number
  ) {
    this.numer = numer;
    this.denom = denom;

    return this;
  }


  public car(): number {
    return this.numer;
  }

  public cdr(): number {
    return this.denom;
  }

  public toArray(): Array<number> {
    return [this.car(), this.cdr()];
  }
}