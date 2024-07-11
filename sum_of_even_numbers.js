function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let num of arr) {
    sum = num % 2 === 0 ? sum + num : sum;
  }

  return sum;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
