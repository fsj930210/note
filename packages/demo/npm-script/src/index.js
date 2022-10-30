const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  console.log('2222');
  console.log('33333');
  console.log('44444');
  return NaN;
};

module.exports = { add };
