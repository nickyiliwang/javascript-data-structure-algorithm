// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// this solution is better than nest loops because of O(n), linear time

function same(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  let result = false;
  const a1map = {};
  const a2map = {};

  a1.forEach((n) => {
    // key val is the same
    a1map[n] = n;
  });
  a2.forEach((n) => {
    a2map[n] = n;
  });

  //   check every key val in a1map
  for (let key in a1map) {
    if (!a2map[key ** 2]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3, 4], [1, 4, 9, 4]));
console.log(same([1, 2, 3], [1, 4, 9, 16]));
console.log(same([1, 2, 3], [1, 4, 9, 16]));

// First ATTEMPT AT HASH MAPS
// NOTHING WORKS LMAO
// function same(a1, a2) {
//   let result = false;
//   const a1map = {};
//   const a2map = {};

//   a1.forEach((n) => {
//     a1map[n] = n;
//   });
//   a2.forEach((n) => {
//     a2map[n] = n;
//   });

//   for (let key in a1map) {
//     if (!a2map[Math.pow(key, 2)]) {
//       result = false;
//     } else {
//       result = true;
//     }
//   }
//   return result;
// }

// console.log(same([1, 2, 1], [4]));

// // math in js : number ** 2 is the same as Math.pow(number, 2)

// // naive approach #1, nested for loops (O(n^2))
// function same(arr1, arr2) {
//   let result = [];
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   arr1.forEach((num) => {
//     arr2.forEach((num2) => {
//       if (num ** 2 === num2) {
//         result.push(true);
//       }
//       result.push(false);
//     });
//   });
// }

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 4, 9, 16]));
// console.log(same([1, 2, 3], [1, 4, 9, 16]));
