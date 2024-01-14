// Copy only listed values from dict

// Step 2
// Add 'use strict';
// Add `const` and `let`

'use strict';

const only = (W, ...only) => {
  let x = Object.keys(W, 'a', 'b', 'c');
  x.forEach((z) => {
    if (only.includes(z)) {
    } else {
      delete z[z];
    }
  });
  return W;
};

module.exports = only;
