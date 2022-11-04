// Given an array of integers nums and
// an integer target,
//  return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// const array = [1, 4, 6, 8, 9, 10, 23];
// const target = 9; // target
// let twoSum = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum(array, target));

// const nums = [4, 5, 6, 7, 8, 9];
// let target = 2;
// let count = 0;
// let arithmeticTriplets = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] - array[i] === target) {
//         for (let k = i + 2; k < array.length; k++) {
//           if (array[k] - array[j] === target) {
//             count += 1;
//           }
//         }
//       }
//     }
//   }
//   return count;
// };
// const result = arithmeticTriplets(nums, target);
// console.log(result);

let isPalindrome = function (x) {
  const str = x.toString().;
  let sum = 0;
  let m;
  for (let i = x.length - 1; i > 0; i--) {}
  // while (x != 0) {
  //   m = parseInt(x % 10);
  //   console.log(m);
  //   sum = sum * 10 + m;
  //   x = parseInt(x / 10);
  // }
  console.log(sum);
  if (temp == sum) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(-121));
