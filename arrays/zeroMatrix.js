/*
Write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to 0.
*/

function zeroMatrix(matrix) {
    let row = -1, col = -1;
    for (let i = 0; i < matrix.length && row < 0; i++) {
        for (let j = 0; j < matrix[0].length && row < 0; j++) {
            if (matrix[i][j] === 0) [row, col] = [i , j];
        }
    }    

    for (let i = 0; i < matrix.length; i++) {
        if (i !== row) {
            matrix[i][col] = 0; 
            continue;
        }
        for (let j = 0; j < matrix[0].length; j++) matrix[i][j] = 0;
    }
}

const matrix = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 0, 3, 3],
    [4, 4, 4, 4, 4]
];

console.log("\nBefore:");
matrix.forEach((arr) => console.log(arr));

zeroMatrix(matrix);

console.log("\nAfter:");
matrix.forEach((arr) => console.log(arr));