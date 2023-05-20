import { classNames } from './classNames';

describe('classNames', () => {
  test('with ony first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hover test';
    expect(
      classNames('someClass', { hover: true, test: true }, ['class1', 'class2'])
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hover';
    expect(
      classNames('someClass', { hover: true, test: false }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with mods underfined', () => {
    const expected = 'someClass class1 class2 hover';
    expect(
      classNames('someClass', { hover: true, test: undefined }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
