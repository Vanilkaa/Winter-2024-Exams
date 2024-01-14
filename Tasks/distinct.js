// Step 2
// Change identifiers case
// Add `let`

// Return an array without duplicates

"use strict";

const distinct = (data) => {
  let a = new Set();
  let w = 0;
  data.forEach((i) => {
    if (a.has(i)) {
      delete data[w];
    } else {
      a.add(i);
    }
    w++;
  });
  return data.filter((x) => typeof x === "number");
};

module.exports = distinct;
