var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let leftMin = nums[left] - target;
    let rightMin = nums[right] - target;

    if (rightMin < leftMin) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};



// const nums = [4,5,6,7,0,1,2], target = 0
const nums = [6, 7, 8, 9, 0, 1, 2, 3, 4, 5], target = 3
// Output: 4


console.log(search(nums, target))