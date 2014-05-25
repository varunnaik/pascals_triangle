/**
 * Created by varun on 21/5/14.
 */
var PascalTriangle = {};

PascalTriangle.generate = function(rows) {
    // Generate the specified number of rows of a pascal's triangle and return an array as a result
    var triangle = [];
    for (var row = 0; row <= rows; row++) {
        triangle[row] = PascalTriangle.generateRow(row);
    }
    return triangle;
};

PascalTriangle.generateRow = function(n) {
    // Generate the nth row of Pascal's triangle and return it
    var row = [1]
    for (var i = 0; i < n; i++) {
        row.push(parseInt(row[i] * ((n - i) / (i + 1))));
    }
    return row
};