// Step 1
// Add 'use strict';
// Add `const` and `let`

// Split string into array by the first occurrence of separator

'use strict';

const SectionString = (s, t) => {
  const i = s.indexOf(t);
  if (i < 0 || t == '') {
    return [s, ''];
  } else {
    return [s.slice(0, i), s.slice(i + t.length)];
  }
};

module.exports = SectionString;
