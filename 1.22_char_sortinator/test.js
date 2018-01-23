describe('charSortinator', () => {
  it('given: bacd  return: abcd', () => {
    const stringInput = 'bacd';
    const expected = 'abcd';
    expect(charSortinator(stringInput)).toEqual(expected);
  });

});
