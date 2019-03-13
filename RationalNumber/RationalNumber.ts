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


  // public cons(x: number, y: number) {
  //   function dispatch(m: number): number {
  //     if (m === 0) { return x }
  //     else if (m === 1) { return y }
  //     else { console.error('Arguemtn not 0 or 1', m); }
  //   }
  //   return dispatch;
  // }

  public toArray(): Array<number> {
    return [this.car(), this.cdr()];
  }

  public print(): string {
    return `${this.numer} / ${this.denom}`;
  }

  public equals(m: RationalNumber): boolean {
    return ((this.numer * m.denom) === (m.numer * this.denom));
  }
}

function addRat(x: RationalNumber, y: RationalNumber): RationalNumber {
  return new RationalNumber(
    (x.numer * y.denom) + (y.numer * x.denom),
    (x.denom * y.denom)
  )
}

function subRat(x: RationalNumber, y: RationalNumber): RationalNumber {
  return new RationalNumber(
    (x.numer * y.denom) - (y.numer * x.denom),
    (x.denom * y.denom)
  )
}

function multiRat(x: RationalNumber, y: RationalNumber): RationalNumber {
  return new RationalNumber(
    (x.numer * y.numer),
    (x.denom * y.denom)
  )
}

function divRat(x: RationalNumber, y: RationalNumber): RationalNumber {
  return new RationalNumber(
    (x.numer * y.denom),
    (x.denom * y.numer)
  )
}

!function (): boolean {
  const x = new RationalNumber(1, 2);
  // console.log(x.print());

  const y = new RationalNumber(3, 4);
  // console.log(y.print());

  const r = addRat(x, y);
  console.log(r.print()); // 10 / 8

  return true;
}();