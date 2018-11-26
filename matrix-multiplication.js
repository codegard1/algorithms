var Matrix = /** @class */ (function () {
    function Matrix(cols, rows, multiplier, name) {
        this.cols = cols;
        this.rows = rows;
        this.multiplier = multiplier;
        this.name = name;
        var m = new Array();
        for (var i = 0; i < rows; i++) {
            m[i] = new Array();
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
    Matrix.prototype.print = function () {
        console.log("Matrix: " + this.name);
        var m = this.value;
        for (var i = 0; i < this.cols; i++) {
            console.log(m[i]);
        }
    };
    Matrix.prototype.setFromArray = function (arr, name) {
        this.name = name || this.name;
        this.value = arr || [];
        this.rows = arr ? arr.length : undefined;
        this.cols = arr[0] ? arr[0].length : undefined;
    };
    Matrix.prototype.set = function (i, j, n) {
        this.value[i][j] = n;
    };
    Matrix.prototype.get = function (i, j) {
        return this.value[i][j];
    };
    /**
     * Element r[i,j] is the dot product of the ith row of p
     * with the jth column of q.
     * The dot product is simply the sum of the N term-by-term
     * multiplications p[i,1]*q[1,j]+p[i,2]*q[i,j]+...p[i,N-1]*q[N-1,j]
     * @param mtx
     */
    Matrix.prototype.multiply = function (mtx) {
        var p = this;
        var q = mtx;
        var pCol = p.cols;
        var qRows = q.rows;
        p.print();
        q.print();
        // result matrix
        var r = new Matrix(3, 3, 0, "result");
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
    };
    return Matrix;
}());
console.time("matrix-multiplication.js");
// Generate Sample matrices
var p = new Matrix(3, 4, 100, "p");
var q = new Matrix(3, 4, 100, "q");
// generate a result
var r = p.multiply(q);
// Print the result
r.print();
console.timeEnd("matrix-multiplication.js");
