// You should implement your task here.

module.exports = function towelSort(matrix) {
    //1й способ:

    /*
    if (!matrix) return [];

    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2)) {
            for (let j = 0; j < matrix[i].length; j++) {
                res.push(matrix[i][j]);
            }
        }

        if (i % 2) {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                res.push(matrix[i][j]);
            }
        }
    }

    return res;
    */

    //2й способ:

    if (!matrix) return [];

    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) matrix[i].reverse();
        for (let j = 0; j < matrix[i].length; j++) {
            res.push(matrix[i][j]);
        }
    }

    return res;
};
