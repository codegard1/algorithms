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

  public print() {
    console.log("Matrix: " + this.name);
    let m: Array<Array<number>> = this.value;

    for (let i = 0; i < this.cols; i++) {
      console.log(m[i]);
    }
  }

  public setFromArray(arr, name) {
    this.name = name || this.name;
    this.value = arr || [];
    this.rows = arr ? arr.length : undefined;
    this.cols = arr[0] ? arr[0].length : undefined;
  }

  public set(i, j, n) {
    this.value[i][j] = n;
  }

  public get(i, j) {
    return this.value[i][j];
  }

  /**
   * Element r[i,j] is the dot product of the ith row of p
   * with the jth column of q.
   * The dot product is simply the sum of the N term-by-term
   * multiplications p[i,1]*q[1,j]+p[i,2]*q[i,j]+...p[i,N-1]*q[N-1,j]
   * @param mtx
   */
  public multiply(mtx) {
    let p: Matrix = this;
    let q: Matrix = mtx;
    let pCol = p.cols;
    let qRows = q.rows;
    p.print();
    q.print();

    // result matrix
    let r = new Matrix(3, 3, 0, "result");

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

console.time("matrix-multiplication.js");
// Generate Sample matrices
const p = new Matrix(3, 4, 100, "p");
const q = new Matrix(3, 4, 100, "q");

// generate a result
const r = p.multiply(q);

// Print the result
r.print();

console.timeEnd("matrix-multiplication.js");
