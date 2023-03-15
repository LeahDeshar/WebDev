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

// let isPalindrome = function (x) {
//   const str = x.toString().split("").reverse().join("");
//   const temp = x;

//   if (temp == str) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome(-121));

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// const s = "aa",
//   p = "a";

const str = "  This is my cat  ";
const res = str.trim().split("");
let count = 0;
const length = res.length;
for (let i = length - 1; i >= 0; i--) {
  if (res[i] == "") {
    count++;
  }
}
// console.log(count);
var lengthOfLastWord = function (s) {
  var sArr = s.trim().split(" ");
  if (sArr.length === 0) {
    return 0;
  } else {
    return sArr[sArr.length - 1].length;
  }
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));

const arr = ["a"];
