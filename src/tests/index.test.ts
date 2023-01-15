import app from '../index';

describe('app', () => {
  it('should return start', () => {
    const result = app();
    expect(result).toBe('start');
  });
});