// Count words in a string

//Step 2
// Add 'use strict';
// Add `const` and `let`

'use strict';

const Words = function(s) {
  let number_of_words_in_s = 0;
  let flag = false;

  for (let c of s) {
    if (c === ' ') {
      flag = false;
    } else {
      if (!flag) {
        number_of_words_in_s++;
      }
      flag = true;
    }
  }

  return number_of_words_in_s;
};

module.exports = Words;
