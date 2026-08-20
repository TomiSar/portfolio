import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Education from './Education.astro';

describe('Education Component', () => {
  const mockEducation = [
    {
      degree: 'Master of Science',
      school: 'Test University',
      period: '1995',
      description: 'Graduated with computer science masters degree.',
    },
  ];

  it('should render education details correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Education, {
      props: { education: mockEducation },
    });

    expect(result).toContain('id="education"');
    expect(result).toContain('Master of Science');
    expect(result).toContain('Test University');
    expect(result).toContain('1995');
    expect(result).toContain('Graduated with computer science masters degree.');
  });
});
