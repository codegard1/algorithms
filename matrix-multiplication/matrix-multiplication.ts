interface Matrix {
  value: Array<Array<number>>;
  rows: number;
  cols: number;
  multiplier: number;
  name: string;
}

class Matrix {
  constructor(
    public cols: number,
    public rows: number,
    public multiplier: number,
    public name: string
  ) {
    let m = new Array();
    for (let i = 0; i < rows; i++) {
      m[i] = new Array();
      for (let j = 0; j < cols; j++) {
        m[i][j] = Math.floor(Math.random() * multiplier);
      }
    }

    this.value = m;
    this.rows = rows;
    this.cols = cols;
    this.multiplier = multiplier;
    this.name = name || "";

    return this;
  }

  public print(): void {
    console.log("Matrix: " + this.name);
    let m: Array<Array<number>> = this.value;

    for (let i = 0; i < this.cols; i++) {
      console.log(m[i]);
    }
  }

  /**
   * Unused
   * @param arr 
   * @param name 
   */
  public setFromArray(arr, name) {
    this.name = name || this.name;
    this.value = arr || [];
    this.rows = arr ? arr.length : undefined;
    this.cols = arr[0] ? arr[0].length : undefined;
  }

  /**
   * Set the value of a specific cell in the Matrix 
   * @param i 
   * @param j 
   * @param n 
   */
  public set(i: number, j: number, n: number) {
    this.value[i][j] = n;
  }

  /**
   * Get the value of a specific cell in the Matrix
   * @param i 
   * @param j 
   */
  public get(i, j) {
    return this.value[i][j];
  }

  /**
   * Element _r[i,j]_ is the dot product of the ith row of p
   * with the jth column of q.
   * The dot product is simply the sum of the N term-by-term
   * multiplications p[i,1]*q[1,j]+p[i,2]*q[i,j]+...p[i,N-1]*q[N-1,j]
   * @param mtx
   */
  public multiply(mtx: Matrix): Matrix {
    const p: Matrix = this;
    const q: Matrix = mtx;
    const pCol = p.cols;
    const qRows = q.rows;
    p.print();
    q.print();

    // result matrix
    let r: Matrix = new Matrix(qRows, pCol, 0, "result");

    console.log(`pCol: ${pCol}   qRows: ${qRows}`);
    //  if p.columns == q.rows
    if (pCol === qRows) {
      // For each row in matrix p
      for (let i = 0; i < pCol; i++) {
        // For each column in matrix q
        for (let j = 0; j < qRows; j++) {
          // console.log("...");

          let t: number = 0;
          for (let k = 0; k < pCol; k++) {
            let n = p.get(i, k);
            let m = q.get(k, j);
            t += n * m;
            //   console.log(n + "x" + m + "=" + n * m + "  t:" + t);
          }

          r.set(i, j, t);
        }
      }
    }

    return r;
  }
}

!function (): boolean {

  console.time("matrix-multiplication.js");
  // Generate Sample matrices
  const p: Matrix = new Matrix(3, 3, 100, "p");
  const q: Matrix = new Matrix(3, 3, 100, "q");

  // generate a result
  const r = p.multiply(q);

  // Print the result
  r.print();

  console.timeEnd("matrix-multiplication.js");
  return true;
}();
