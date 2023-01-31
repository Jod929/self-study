// var maxProfit = function(prices) {


//   let max = 0;
//   let i = 0;
//   let j = prices.length - 1;
//   let largest = 0;

//   while (j > i) {
//     max = Math.max(max, prices[j] - prices[i]);
//     largest = Math.max(largest, prices[j]);

//     // && prices[j] !== largest

//     if (prices[j] > prices[i]) {
//       j--;
//     } else {
//       i++;
//     }
//   }

//   return max;
// };

// const prices = [7,1,5,3,6,4];


var maxProfit = function(prices) {

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let sellPrice = prices[i];

    let profit = sellPrice - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    if (sellPrice < minPrice) minPrice = sellPrice;
  }

  return maxProfit;
}

const prices = [2,1,4];

console.log(maxProfit(prices)); // 5