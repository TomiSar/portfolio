import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Header from './Header.astro';

describe('Header Component', () => {
  it('should render all navigation links', async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Header);

    const expectedLinks = [
      'About',
      'Skills',
      'Experience',
      'Education',
      'Social Media',
    ];

    expectedLinks.forEach((link) => {
      expect(result).toContain(link);
    });
  });

  it('should have a theme toggle button', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain('id="theme-toggle"');
    expect(result).toContain('DARK MODE');
  });
});
