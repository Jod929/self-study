var topKFrequent = function(nums, k) {

  // make an object to hold the results
  let times = {};
  let res = [];
  // iterate through nums, adding the number of times an element has been seen
  for (let i = 0; i < nums.length; i++) {
      if (times[nums[i]] === undefined) {
          times[nums[i]] = 1;
      } else {
          times[nums[i]]++;
      }
  }


  let sortedArr = [];

  // iterate through the obj and push into arr

  for (let time in times) {
    sortedArr.push([time, times[time]])
  }

   // sort the array
  sortedArr.sort(function(a, b) {
    return b[1] - a[1];
  });


  // iterate through the array k times
        // push each value into result variable
  for (let i = 0; i < k; i++) {
    let currentVal = sortedArr[i][0];
    res.push(currentVal)
  }
      // return result

  return res;
};

// const nums = [1,1,1,2,2,3];
const nums = [1,2,2,3];
const k = 2;


console.log(topKFrequent(nums, k))

// topKFrequent(nums, k)

// res: [1,2]