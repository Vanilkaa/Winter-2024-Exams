// Get month number

//Step 1
// Format code indentation and spacing

Months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',];

Month = (s) => {
  l = Months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
