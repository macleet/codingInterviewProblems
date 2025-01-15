/* 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotateMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

const matrix = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
];

console.log("\nBefore:");
matrix.forEach((arr) => console.log(arr));

rotateMatrix(matrix);

console.log("\nAfter:");
matrix.forEach((arr) => console.log(arr));