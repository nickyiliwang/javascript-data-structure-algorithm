// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  // left 0 index
  let left = 0;
  // last index
  let right = arr.length - 1;

  //  empty array returns undefined

  if (arr.length === 0) return undefined;

  // initial loop, right is gonna be bigger than left

  while (left < right) {
    // checking the sum
    let sum = arr[left] + arr[right];

    // limiters
    if (sum === 0) {
      // returning the first pair that sums to 0
      return [arr[left], arr[right]];

      // we can use the else if like this to check sum
      // because its an sorted array
      // [-4, -2, -1, 0, 1, 2, 3, 4, 5]
      // -4 + 5 = 1, bigger than
      // right-- and we move onto -4 + 4 = 0 which would give us the result

      // [-4, -2, -1, 0, 1, 2, 3]
      // -4 + 3 = -1, already smaller than zero
      // left++ and we move onto -2 + 3 = 1
    } else if (sum > 0) {
      // going down the array
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([]));

// Naive approach
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return undefined;
// }
