import calculateDifferencePercentage from './calculateDifferencePercentage';
describe('calculateDifferencePercentage', () => {
  it('should return the correct discount with strings', () => {
    const result = calculateDifferencePercentage('10', '100');
    expect(result).toMatch('-90%');
  });

  it('should return the correct discount with strings', () => {
    const result = calculateDifferencePercentage('16,99', '18,99');
    expect(result).toMatch('-11%');
  });

  it('should return the correct discount with numbers', () => {
    const result = calculateDifferencePercentage(10, 100);
    expect(result).toMatch('-90%');
  });

  it('should return the correct discount with decimals, dismissing decimals', () => {
    const result = calculateDifferencePercentage('10,99', '100');
    expect(result).toMatch('-90%');
  });

  it('should return 0 when no difference', () => {
    const result = calculateDifferencePercentage('100', '100');
    expect(result).toMatch('0%');
  });
});
