// Filter array by type name

// Step 1
// Add 'use strict';
// Add `const` and `let`

'use strict';

const Filter = (T, t) => {
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

module.exports = Filter;
