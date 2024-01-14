// Get day number

// Step 4
// Shorten if statement to one line

'use strict';

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  for (let i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
