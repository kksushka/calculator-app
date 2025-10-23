export const abs = (n) => (n < 0 ? -n : n);

export const isFiniteSafe = (n) =>
  typeof n === 'number' &&
  !Number.isNaN(n) &&
  n !== Infinity &&
  n !== -Infinity;

export const factorial = (n) => {
  if (n < 0 || n % 1 !== 0) return NaN;
  if (n > 170) return NaN;
  if (n === 0) return 1;

  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

const intPow = (base, exp) => {
  if (exp === 0) return 1;
  let res = 1;
  const positive = exp > 0;
  const absExp = positive ? exp : -exp;
  for (let i = 0; i < absExp; i++) res *= base;
  return positive ? res : 1 / res;
};

export const ln = (x) => {
  let currentX = x;
  if (currentX <= 0) return NaN;
  let y = 0;
  while (currentX >= 2) {
    currentX /= 2;
    y += 0.69314718056;
  }
  while (currentX < 1) {
    currentX *= 2;
    y -= 0.69314718056;
  }
  const z = currentX - 1;
  let sum = z;
  let term = z;
  for (let i = 2; i <= 20; i++) {
    term *= -z;
    sum += term / i;
  }
  return y + sum;
};

const expApprox = (x) => {
  let sum = 1;
  let term = 1;
  for (let i = 1; i <= 20; i++) {
    term *= x / i;
    sum += term;
  }
  return sum;
};

export const pow = (base, exp) => {
  if (exp === 0) return 1;
  if (base === 0) return exp > 0 ? 0 : NaN;

  if (exp % 1 === 0) return intPow(base, exp);

  const negativeBase = base < 0;
  const absBase = abs(base);

  const lnVal = ln(absBase);
  if (Number.isNaN(lnVal)) return NaN;

  const res = expApprox(lnVal * exp);
  return negativeBase && exp % 2 !== 0 ? -res : res;
};

export const nthRoot = (value, n) => {
  if (n === 0) return NaN;
  if (value < 0 && n % 2 === 0) return NaN;
  if (value === 0) return 0;

  const isNegative = value < 0 && n % 2 === 1;
  const absValue = abs(value);

  let x = absValue;
  if (x > 1) x /= 2;

  for (let i = 0; i < 50; i++) {
    const xp = pow(x, n - 1);
    if (xp === 0) break;
    const xn = ((n - 1) * x + absValue / xp) / n;
    if (abs(xn - x) < 1e-12) break;
    x = xn;
  }

  return isNegative ? -x : x;
};

export const normalizeUnaryMinus = (expr) =>
  expr.replace(/(^|[+\-*/])-(?=\d)/g, '$10-');
