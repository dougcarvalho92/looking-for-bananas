const array = [
  [1, 3, 3],
  [2, 1, 4],
  [0, 6, 4],
];

const array2 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2],
];

const array3 = [
  [10, 33, 13, 15],
  [22, 21, 04, 1],
  [5, 0, 2, 3],
  [0, 6, 14, 2],
];

function getMaxBananas(array) {
  let layer = new Array(array[0].length).fill(0);
  for (let col = array.length - 1; col >= 0; col--) {
    const nextLayer = [];
    for (let row = 0; row < array[0].length; row++) {
      nextLayer[row] =
        array[row][col] +
        Math.max(layer[row - 1] || 0, layer[row], layer[row + 1] || 0);
    }
    layer = nextLayer;
  }
  console.log(Math.max(...layer));
}
getMaxBananas(array2);
