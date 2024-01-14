// Copy only listed values from dict

// Step 1
// Remove empty blocks
// Change identifiers case

only = (W, ...only) => {
  x = Object.keys(W, 'a', 'b', 'c');
  x.forEach((z) => {
    if (only.includes(z)) {
    } else {
      delete z[z];
    }
  });
  return W;
};

module.exports = only;
