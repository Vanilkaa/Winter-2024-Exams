// Count words in a string

//Step 3
// Change identifiers case

'use strict';

const words = function(s) {
  let numberOfWordsInS = 0;
  let flag = false;

  for (let c of s) {
    if (c === ' ') {
      flag = false;
    } else {
      if (!flag) {
        numberOfWordsInS++;
      }
      flag = true;
    }
  }
  return numberOfWordsInS;
};

module.exports = Words;
