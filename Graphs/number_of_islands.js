var numIslands = function(grid) {

  let count = 0;

  const checkLand = (i, j) => {

    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }

    if (grid[i][j] !== '1') {
      return;
    }

    grid[i][j] = 'x';

    checkLand(i + 1, j);
    checkLand(i - 1, j);
    checkLand(i, j + 1);
    checkLand(i, j - 1);
  }



  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {

      let curVal = grid[i][j];

      if (curVal === '1') {
        checkLand(i, j);
        count++;
      }
    }
  }

  return count;

}



const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

// const grid = [
//   ["1", "0"],
//   ["0", "0"]
// ]

const ex = 3;
const act = numIslands(grid);

const test = (ex, act) => {
  if (ex === act) console.log('PASSED, got: ', act);

  if (ex !== act) console.log('FAILED, got: ', act);
}

test(ex, act);


