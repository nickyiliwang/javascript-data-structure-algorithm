// Implement a function called countUniqueValues,  which accepts a sorted array, and counts the unique values in a array. There can be negative numbers in the array, but it will always be sorted.

// solution
function countUniqueValues(arr) {
  let i = 0;
  const result = [];
  if (arr.length === 0) return 0;

  result.push(arr[i]);
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      result.push(arr[i]);
    }
  }
  console.log(result);
  return i + 1;
}

// // ATTEMPT #2 with while loop
// function countUniqueValues(arr) {
//   let i = 0;
//   let j = 1;
//   let result = [];

//   if (arr.length === 0) return 0;

//   result.push(arr[i]);
//   while (j < arr.length) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//       result.push(arr[i]);
//     }

//     j++;
//   }
//   console.log(i + 1);
//   return result;
// }

// // ATTEMPT 1
// function countUniqueValues(arr) {
//   let i = 0;
//   let j = i + 1;
//   let result = [];

//   if (arr.length === 0) return 0;

//   while (i < arr.length - 1) {
//     if (arr[i] === arr[j]) {
//       j++;
//     } else {
//       result.push(arr[i]);
//       i = j;
//     }
//   }
//   return result;
// }

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
console.log(
  countUniqueValues([1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 8, 9, 9, 12, 13, 14])
);
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
