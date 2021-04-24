// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Using the sliding shadow method



// // Colt's naive solution
// function maxSubarraySum(arr, n) {
//   if (arr.length === 0) return null;
//   let temp = 0;
//   let max = -Infinity;
//   for (let i = 0; i <= arr.length - n; i++) {
//     temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// // 1st Attempt naive, I'm fucking smart bro
// function maxSubarraySum(arr, n) {
//   if (arr.length === 0) return null;
//   let sum = 0;
//   let sumContainer = [];

//   for (let i = 0; i <= arr.length - n; i++) {
//     const chunk = arr.slice(i, i + n);
//     let chunkSum = 0;
//     for (let j = 0; j < chunk.length; j++) {
//       chunkSum += chunk[j];
//     }
//     sumContainer.push(chunkSum);
//   }

//   for (let h = 0; h < sumContainer.length; h++) {
//     if (sumContainer[h] > sum) {
//       sum = sumContainer[h];
//     }
//   }
//   return sum;
// }

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([4, 2, 1, 6], 1));
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubarraySum([], 4));
