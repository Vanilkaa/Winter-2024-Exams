// Shuffle an array

// Step 2
// Add 'use strict';

'use strict';

let shuffle = (...list) => {
  const [arr] = list;
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;
