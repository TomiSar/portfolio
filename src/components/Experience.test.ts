import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Experience from './Experience.astro';

describe('Experience Component', () => {
  const mockExperience = [
    {
      company: 'Test Company',
      role: 'DevOps',
      period: '2023-2024',
      projects: 'Test Project',
      description: 'Doing things',
    },
    {
      company: 'Foo Company',
      role: 'Developer',
      period: '2022',
      description: 'No projects here',
    },
  ];

  it('should render all experience items and optional projects (branch coverage)', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Experience, {
      props: { experience: mockExperience },
    });

    expect(result).toContain('id="experience"');
    expect(result).toContain('Work Experience');

    expect(result).toContain('Test Company');
    expect(result).toContain('class="projects"');
    expect(result).toContain('Test Project');

    expect(result).toContain('Foo Company');
    const matches = result.match(/class="projects"/g);
    expect(matches?.length).toBe(1); // Vain yksi projekti-p-tagi pitäisi löytyä
  });

  it('should render correct number of articles', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Experience, {
      props: { experience: mockExperience },
    });

    const articles = result.match(/<article/g);
    expect(articles?.length).toBe(mockExperience.length);
  });

  it('should render download CV button with correct attributes', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Experience, {
      props: { experience: mockExperience },
    });

    expect(result).toContain('Download CV (PDF)');
    expect(result).toContain('class="download-cv-btn"');

    expect(result).toContain('href="/Tomi_Sarjamo_CV.pdf"');
    expect(result).toContain('download="Tomi_Sarjamo_CV.pdf"');
  });
});
