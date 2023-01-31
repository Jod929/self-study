
var maxArea = function(height) {

  let area = 0;

  let j = height.length - 1;
  let i = 0;

  while (i < j) {
    const temp = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, temp);

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }

  }

  return area;

};

const height = [1,8,6,2,5,4,8,3,7];
// Output: 49

console.log(maxArea(height))