export { arrayMax, arrayMin, identity, range, stringToNumbers };

const arrayMax = a => Math.max(...a);
const arrayMin = a => Math.min(...a);

const identity = x => x;

function range(beg, end) {
  let arr = Array(end - beg + 1);

  for (let i = 0; i < arr.length; i++, beg++) {
    arr[i] = beg;
  }

  return arr;
}

const stringToNumbers = s => s.split(',').map(Number);
