// Get one random element from an array

//Step 3
// Change identifiers case

'use strict';

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = sample;
