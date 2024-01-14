// Get month number

//Step 3
// Change identifiers case

'use strict';

let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',];

const month = (s) => {
  let l = months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
