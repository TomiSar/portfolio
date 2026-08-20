import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import SocialLink from './SocialLink.astro';

describe('SocialLink Component', () => {
  it('should render link and image with correct attributes', async () => {
    const container = await AstroContainer.create();
    const props = {
      url: 'https://github.com/TomiSar',
      img: 'github-logo.png',
      alt: 'GitHub Alt',
      label: 'GitHub',
    };

    const result = await container.renderToString(SocialLink, { props });

    expect(result).toContain(`href="${props.url}"`);
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');

    expect(result).toContain(`src="${props.img}"`);
    expect(result).toContain(`alt="${props.alt}"`);
    expect(result).toContain('class="social-image"');

    expect(result).toContain(props.label);
  });
});
