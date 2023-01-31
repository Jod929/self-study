var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[right] < nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(findMin([3,4,5,1,2]))

const nums = [3,4,5,1,2];
const act = findMin(nums);
const ex = 1

const test = (ex, act) => {
  if (ex === act) console.log('PASSED, got: ', act);

  if (ex !== act) console.log('FAILED, got: ', act);
}

test(ex, act);