// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { changeTheme } from './utils';

describe('changeTheme method', () => {
  beforeEach(() => {
    document.documentElement.className = '';
  });

  it('should add dark mode when not present', () => {
    const nextText = changeTheme();

    expect(document.documentElement.classList.contains('dark_mode')).toBe(true);
    expect(nextText).toBe('LIGHT MODE');
  });

  it('should remove dark mode class when it already exists', () => {
    document.documentElement.classList.add('dark_mode');

    const nextText = changeTheme();

    expect(document.documentElement.classList.contains('dark_mode')).toBe(
      false,
    );
    expect(nextText).toBe('DARK MODE');
  });

  it('should change classes several times in succession', () => {
    changeTheme();
    const finalResult = changeTheme();

    expect(document.documentElement.classList.contains('dark_mode')).toBe(
      false,
    );
    expect(finalResult).toBe('DARK MODE');
  });
});
