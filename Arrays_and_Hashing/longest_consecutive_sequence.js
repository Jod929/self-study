// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {

  let set = new Set(nums);
  let streak = 0;

  for (let num of set) {
    if (set.has(num-1)) continue;
    let curStreak = 1;

    while (set.has(num+1)) {
      curStreak++;
      num++;
    }
    streak = Math.max(streak, curStreak);
  }

  return streak;
};

// Input:
const nums = [100,4,200,1,3,2];
// const nums = [0,3,7,2,5,8,4,6,0,1];
// Output:
const res = 4;
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive(nums));