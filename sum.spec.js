'use strict';

const sum = require('sum');

describe('testing the sum function', () => {
  it('should add 2 numbers together', () => {
    let answer = sum(1, 2);

    expect(answer).toBe(3);
  });
});


