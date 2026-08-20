import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Footer from './Footer.astro';
import data from '../data/cv_data.json';

describe('Footer Component', () => {
  const mockProps = {
    title: 'Follow Me',
    navlinkId: 'social-test',
    socials: data.socials,
  };

  it('should render the footer with correct ID and title', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer, { props: mockProps });

    expect(result).toContain(`id="${mockProps.navlinkId}"`);
    expect(result).toContain(`<h2>${mockProps.title}</h2>`);
    expect(result).toContain('class="footer-section"');
  });

  it('should map through socials and capitalize labels', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer, { props: mockProps });

    Object.keys(data.socials).forEach((key) => {
      const expectedLabel = key.charAt(0).toUpperCase() + key.slice(1);
      expect(result).toContain(expectedLabel);
    });

    Object.values(data.socials).forEach((social) => {
      expect(result).toContain(`href="${social.url}"`);
    });
  });

  it('should handle empty socials object without crashing', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer, {
      props: { ...mockProps, socials: {} },
    });

    expect(result).toContain('class="nav-links"');
    expect(result).not.toContain('<a');
  });
});
