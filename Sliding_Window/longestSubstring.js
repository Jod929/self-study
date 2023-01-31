var lengthOfLongestSubstring = function(s) {
  let max = 0;

  let windowStart = 0;

  const soFar = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd]; // p // w // w
    soFar[rightChar] = soFar[rightChar] + 1 || 1; // {p: 1} // {p: 1, w: 1} // {p: 1: w: 2}

    while (soFar[rightChar] > 1) { // 2
      let leftChar = s[windowStart]; // p

      if (soFar[leftChar] > 1) {
        soFar[leftChar]--;
      } else {
        delete soFar[leftChar]; // {w: 2}
      }

      windowStart++; // 1
    }

    max = Math.max(max, (windowEnd - windowStart) + 1); // (0, (0, 0) + 1) // (1, (1, 0) + 1) //
  }

  return max;
};

const s = "pwwkew";
// const a = "dvdf";


console.log(lengthOfLongestSubstring(s))
// console.log(lengthOfLongestSubstring(a))