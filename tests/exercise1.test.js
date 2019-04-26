const exer = require('../exercise1');

describe('fizzBuzz', () => {
  it('should return an error if the input is not a number', () => {
    const args = [Boolean, null, undefined, String, Symbol];
    args.forEach(a => {
      expect(() => {exer.fizzBuzz(a)}).toThrow();
    });
  });

  it ('should return FizzBuzz if number is devisable by 3 and 5', () => {
    const result = exer.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return Fizz if number is devisable by 3', () => {
    const result = exer.fizzBuzz(9);
    expect(result).toBe('Fizz');
  });

  it('should return Buzz if number is devisable by 5', () => {
    const result = exer.fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('should return the input number if result is not devisible by 3 or 5', () => {
    const result = exer.fizzBuzz(7);
    expect(result).toBe(7);
  })
});

