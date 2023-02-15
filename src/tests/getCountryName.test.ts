import getCountryName from '../utils/getCountryName';

describe('getCountryName', () => {
  describe('country code exists', () => {
    it('should return country name', () => {
      expect(getCountryName('de')).toBe('Germany');
    });
  });

  describe('country code does not exist', () => {
    it('should throw error', () => {
      expect(() => getCountryName('th')).toThrowError('Country with code th does not exist.');
    });
  });
});
