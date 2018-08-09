class matrix {
  constructor(cols, rows, multiplier, name) {
    var m = [];
    for (var i = 0; i < rows; i++) {
      m[i] = [];
      for (var j = 0; j < cols; j++) {
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

  print() {
    console.log("matrix: " + this.name);
    var m = this.value;

    for (var i = 0; i < this.cols; i++) {
      console.log(m[i]);
    }
  }

  setFromArray(arr, name) {
    this.name = name || this.name;
    this.value = arr || [];
    this.rows = arr ? arr.length : undefined;
    this.cols = arr[0] ? arr[0].length : undefined;
  }

  set(i, j, n) {
    this.value[i][j] = n;
  }

  get(i, j) {
    return this.value[i][j];
  }

  /* Element r[i,j] is the dot product of the ith row of p with the jth column of q */
  /* The dot product is simply the sum of the N term-by-term multiplications p[i,1]*q[1,j]+p[i,2]*q[i,j]+...p[i,N-1]*q[N-1,j] */

  multiply(mtx) {
    var p = this,
      q = mtx;
    var pCol = p.cols;
    var qRows = q.rows;
    p.print();
    q.print();

    // result matrix
    var r = new matrix(3, 3, 0, "result");

    //  if p.columns == q.rows
    if (pCol === qRows) {
      // For each row in matrix p
      for (var i = 0; i < pCol; i++) {
        // For each column in matrix q
        for (var j = 0; j < qRows; j++) {
          // console.log("...");

          var t = 0;
          for (var k = 0; k < pCol; k++) {
            var n = p.get(i, k);
            var m = q.get(k, j);
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
var p = new matrix(3, 4, 100, "p");
var q = new matrix(3, 4, 100, "q");

// generate a result
var r = p.multiply(q);

// Print the result
r.print();

console.timeEnd("matrix-multiplication.js");
