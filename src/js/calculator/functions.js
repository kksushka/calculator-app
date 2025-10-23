import { pow, nthRoot, factorial } from '../utils/helpers';

export const applyFunction = (fn, val) => {
  if (typeof val !== 'number' || isNaN(val)) return NaN;

  switch (fn) {
    case 'square':
      return pow(val, 2);
    case 'cube':
      return pow(val, 3);
    case 'reciprocal':
      return val === 0 ? NaN : 1 / val;
    case 'sqrt':
      return nthRoot(val, 2);
    case 'cbrt':
      return nthRoot(val, 3);
    case 'tenPower':
      return pow(10, val);
    case 'factorial': {
      const res = factorial(val);
      return isNaN(res) ? NaN : res;
    }
    default:
      return val;
  }
};
