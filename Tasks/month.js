// Get month number

//Step 4
// Remove useless variable l

'use strict';

let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',];

const month = (s) => {
  for (let i = 0; i < months.length; i++) {
    if (s.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
