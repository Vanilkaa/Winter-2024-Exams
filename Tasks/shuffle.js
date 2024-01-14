// Shuffle an array

// Step 1
// Remove empty blocks
// Change identifiers case

let shuffle = (...list) => {
  const [arr] = list;
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;
