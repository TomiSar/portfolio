import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Index from '../pages/index.astro';
import data from '../data/cv_data.json';

describe('Index Page', () => {
  it('should render the full layout with all main sections', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);

    expect(result).toContain('<html lang="en"');
    const metaContent = `${data.name} - ${data.title}`.replace('&', '&amp;');
    expect(result).toContain(`content="${metaContent}"`);
    expect(result).toContain(`<title>${data.name} - Portfolio</title>`);

    expect(result).toContain('id="about"');
    expect(result).toContain('id="skills"');
    expect(result).toContain('id="experience"');
    expect(result).toContain('id="education"');
    expect(result).toContain('id="social"');
  });

  it('should contain the main content wrapper', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);

    expect(result).toContain('<main>');
    expect(result).toContain('</main>');
  });
});
