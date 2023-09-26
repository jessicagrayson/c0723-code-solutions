// Testing file for numbers.js, imports functions for testing -
import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

//  Tests evenNumbers
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const inputNumbers = [1, 2, 3, 4, 5, 6];
    const result = evenNumbers(inputNumbers);
    expect(result).toEqual([2, 4, 6]);
  });
  it('returns odd numbers', () => {
    const inputNumbers = [1, 3, 5, 7, 9];
    const result = evenNumbers(inputNumbers);
    expect(result).toEqual([]);
  });
  it('tests empty array', () => {
    const inputNumbers = [];
    const result = evenNumbers(inputNumbers);
    expect(result).toEqual([]);
  });
});

// Tests toDollars
describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 12.178;
    const result = toDollars(amount);
    expect(result).toBe('$12.18');
    // expect(false).toBe(true);
  });
  it('tests case for zero', () => {
    const amount = 0;
    const result = toDollars(amount);
    expect(result).toBe('$0');
  });
  it('tests round down', () => {
    const amount = 12.171;
    const result = toDollars(amount);
    expect(result).toBe('$12.17');
  });
});

// Tests divideBy
describe('divideBy', () => {
  it('returns numbers divided by given divisor', () => {
    const numbers = [10, 20, 30, 40];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([5, 10, 15, 20]);
    // expect(false).toBe(true);
  });
  it('tests odd numbers', () => {
    const numbers = [1, 3, 5, 7, 9];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
});

// Tests multiplyBy
describe('multiplyBy', () => {
  it('multiplies values in an object and adds 1 to each result', () => {
    const inputObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const multiplier = 5;
    const expectedResult = {
      a: 1 * multiplier + 1,
      b: 2 * multiplier + 1,
      c: 3 * multiplier + 1,
    };
    const result = multiplyBy(inputObject, multiplier);
    expect(result).toEqual(expectedResult);
    // expect(false).toBe(true);
  });
  it('test case for 0', () => {
    const inputObject = {
      a: 0,
    };
    const multiplier = 5;
    const expectedResult = {
      a: 0 * multiplier + 1,
    };
    const result = multiplyBy(inputObject, multiplier);
    expect(result).toEqual(expectedResult);
  });
});
