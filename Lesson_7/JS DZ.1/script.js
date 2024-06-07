function createLocker() {
    let currentSum = 0;

    return function(num) {
        currentSum += num;
        return currentSum;
    }
}

const sum = createLocker();

console.log(sum(4));  // 4
console.log(sum(6));  // 10
console.log(sum(10)); // 20
console.log(sum(7));  // 27