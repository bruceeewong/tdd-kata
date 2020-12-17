const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  test('print raw number in string format', () => {
    expect(fizzbuzz(1)).toEqual('1');
    expect(fizzbuzz(19)).toEqual('19');
  });
  test('print Fizz when num can be divided by 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(6)).toEqual('Fizz');
  });
  test('print Buzz when num can be divided by 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(20)).toEqual('Buzz');
  });
  test('print FizzBuzz when num can be divided by both 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(45)).toEqual('FizzBuzz');
  });
});
