import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Skills from './Skills.astro';

describe('Skills Component', () => {
  const mockSkills = {
    Frontend: ['React', 'Vue', 'TypeScript'],
    Backend: ['Node.js', 'Python'],
  };

  it('should render the main section with correct title and ID', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Skills, {
      props: { skills: mockSkills },
    });

    expect(result).toContain('id="skills"');
    expect(result).toContain('<h2>Core Skills</h2>');
    expect(result).toContain('class="skills-grid"');
  });

  it('should render all skill categories as h4 tags', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Skills, {
      props: { skills: mockSkills },
    });

    Object.keys(mockSkills).forEach((category) => {
      expect(result).toContain(`<h4>${category}</h4>`);
    });
  });

  it('should render all individual skills as list items', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Skills, {
      props: { skills: mockSkills },
    });

    Object.values(mockSkills)
      .flat()
      .forEach((skill) => {
        expect(result).toContain(`<li>${skill}</li>`);
      });
  });

  it('should handle empty skills object without crashing (branch coverage)', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Skills, {
      props: { skills: {} },
    });

    expect(result).toContain('class="skills-grid"');
    expect(result).not.toContain('class="skill-category"');
    expect(result).not.toContain('<h4>');
  });
});
