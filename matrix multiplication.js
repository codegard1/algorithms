var p = []; for (var i = 0; i < 3; i++) { p[i] = []; for (var j = 0; j < 3; j++) { p[i][j] = Math.floor(Math.random() * 100) } }
var q = []; for (var i = 0; i < 3; i++) { q[i] = []; for (var j = 0; j < 3; j++) { q[i][j] = Math.floor(Math.random() * 100) } }

/* Element r[i,j] is the dot product of the ith row of p with the jth column of q */
/* The dot product is simply the sum of the N term-by-term multiplications p[i,1]*q[1,j]+p[i,2]*q[i,j]+...p[i,N-1]*q[N-1,j] */

function multiply(p, q) {
    var pCol = p[0].length;
    console.log('p columns: ' + pCol);
    console.log('p rows: ' + p.length);
    console.log('q columns: ' + q[0].length);
    var qRows = q.length;
    console.log('q rows: ' + qRows);

    // result matrix
    var r = [];

    //  if p.columns == q.rows
    if (pCol === qRows) {
        // For each row in matrix p 
        for (var i = 0; i < p.length; i++) {
            // For each column in matrix q
            for (j = 0; j < p.length; j++) {
                // console.log(i + '.' + j);
                var n = p[i][j];
                var m = q[j][i];
                console.log(n + 'x' + m + '=' + (n * m));
                r[i].push(p[i][j] * q[j][i]);
            }
        }
    }
}
