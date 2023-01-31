var productExceptSelf = function(nums) {
  // delare an empty result arr
  let result = [];

  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
  // declare a currentIndex var, set to the current index
      // iterate through nums again
      let curTotal = 1;
      for (let j = 0; j < nums.length; j++) {
      // if the the current val is not on the current index
              // multiply it to the rinnign totat
          if (j !== i) {
              curTotal *= nums[j];
          }
      }
      result.push(curTotal);
  // push that vla into teh result arr;
  }

  // return result
  return result;
};