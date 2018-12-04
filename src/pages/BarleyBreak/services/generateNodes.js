import _ from 'lodash';

const generatenodes = (width, startFrom = 0) => {
  const square = width * width;
  const numbers = _.range(square);
  const breakedNumbers = [ ...numbers.slice(0, -1), null ];
  const randomizedNumbers = _.shuffle(breakedNumbers);
  return randomizedNumbers.map((number, index) => {
    const top = Math.floor(index / width || 0);
    const left = index - top * width;
    const value = number === null ? null : startFrom + number;
    return { value, top, left };
  });
};

export default generatenodes;
