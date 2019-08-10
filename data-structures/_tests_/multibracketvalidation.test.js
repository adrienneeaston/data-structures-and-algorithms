'use strict';

const multiBracketValidation = require('../stacksandqueues/multibracketvalidation/multi-bracket-validation.js');

describe('multiBracketValidation', () => {
  it('Can successfully return true if the brackets can line up', () => {
    let string = '{}{Code}[Fellows](())';
    expect(multiBracketValidation(string)).toBeTruthy();
  });

  it('Can successfully return false if the brackets do not line up', () => {
    let string = '{(})';
    expect(multiBracketValidation(string)).toBeFalsy();
  });

  it('Can successfully handle an edge case', () => {
    let string = 42;
    expect(multiBracketValidation(string)).toBeFalsy();
  });
});