// Write a function that calculates the sum of all numbers from 1 up to  (and including) some number n

// My solution
const sumOfAllNum = (n) => {
  // let result = 1;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // result = result + (i + 1);
    // result = result + i;
    result += i;
  }
  return result;
};

console.log(sumOfAllNum(100));


