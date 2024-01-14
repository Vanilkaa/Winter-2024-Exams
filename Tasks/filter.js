// Filter array by type name

// Step 2
// Change identifiers case

'use strict';

const filter = (T, t) => {
  remove = [];
  for (C of T) {
    let x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (x of remove) T.splice(x, 1);
  return T;
};

module.exports = filter;
