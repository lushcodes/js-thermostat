describe('YourClassHere', () => {

  let yourClassHere;

  beforeEach(() => {
    yourClassHere = new YourClassHere();

  });

  describe('test_method', () => {
    it('should return true', () => {
      a = true;
      expect(yourClassHere.test_method(a)).toEqual(true);
    });
  });
});
