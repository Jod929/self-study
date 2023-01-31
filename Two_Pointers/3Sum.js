// THIS SOLUTION IS TOO SLOW:

// BRUTE FORCE:
// TIME:  O(n^3);
// var threeSum = function(nums) {
//   // declare a storage obj;

//   let storage = {};

//   for (let i = 0; i < nums.length; i++) {
//     // let sum = [];

//     for (let j = i + 1; j < nums.length; j++) {

//       for (let k = j + 1; k < nums.length; k++) {

//         // if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {

//           if (nums[i] + nums[j] + nums[k] === 0) {
//             let sum = [nums[i], nums[j], nums[k]];
//             sum.sort((a, b) => { return a - b });

//             if (storage[sum] === undefined) {
//               storage[sum] = sum;
//             } else {
//               continue;
//             }

//           }
//         // }

//       }
//     }
//   }

//   let result = [];

//   for (key in storage) {
//     result.push(storage[key])
//   }

//   return result;
// };

const twoSum = (j, target, nums) => {
  let k = nums.length - 1;

  let result = [];

  while (j < k) {
    let leftVal = nums[j];
    let rightVal = nums[k];

    if (leftVal + rightVal > target) {
      k--;
    } else if (leftVal + rightVal < target) {
      j++;
    } else {
      result.push([(target * -1), leftVal, rightVal])

      while (j < k && nums[j] === nums[j + 1]) j++;
      while (j < k && nums[k] === nums[k - 1]) k--;
      j++;
      k--;
    }
  }

  return result;

}


var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;

    let subResult = twoSum(i + 1, target, nums);

    // result.push(...subResult);
    result.push(...subResult);

  }

  return result;


}





// const nums = [-1,0,1,2,-1,-4];
// Output: [[-1,-1,2],[-1,0,1]]

const nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums));
