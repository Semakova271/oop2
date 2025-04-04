import showHealth from '../healthChecker';

test('healthy', () => {
    const received = showHealth({ name: 'Маг', health: 90 });
    expect(received).toBe('healthy');
  });
  
  test('wounded', () => {
    const received = showHealth({ name: 'Маг', health: 40 });
    expect(received).toBe('wounded');
  });
  
  test('critical', () => {
    const received = showHealth({ name: 'Маг', health: 10 });
    expect(received).toBe('critical');
  });