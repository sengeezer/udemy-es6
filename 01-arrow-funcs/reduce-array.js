var arr = [1, 2, 3, 4, 5];

const sum = array => {
    return arr.reduce((sum, value) => sum + value);
}

console.log(sum(arr));
