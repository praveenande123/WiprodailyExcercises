function sumArray(numbers) {
    return numbers.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}


const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(sumArray(arr)); 
