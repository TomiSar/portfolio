import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Hero from './Hero.astro';
import data from '../data/cv_data.json';

describe('Hero Component', () => {
  it('should render the name as image alt text', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: {
        name: data.name,
        about: data.about,
        hobbies: data.hobbies,
      },
    });

    expect(result).toContain('class="profile-image"');
    expect(result).toContain(`alt="${data.name}"`);
  });

  it('should render the about text correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: {
        name: data.name,
        about: data.about,
        hobbies: data.hobbies,
      },
    });

    expect(result).toContain('<h2>About</h2>');
    expect(result).toContain(data.about);
  });

  it('should render all provided hobbies with titles', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: {
        name: data.name,
        about: data.about,
        hobbies: data.hobbies,
      },
    });

    data.hobbies.forEach((hobby) => {
      expect(result).toContain(`title="${hobby}"`);
    });
  });

  it('should render hobby icons (SVG tags)', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: {
        name: data.name,
        about: data.about,
        hobbies: ['Programming', 'Music'],
      },
    });

    expect(result).toContain('<svg');
    const hobbyIcons = result.match(/class="hobby-icon"/g);
    expect(hobbyIcons?.length).toBe(2);
  });

  it('should not crash if hobbies list is empty', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: { name: 'Test', about: 'Test', hobbies: [] },
    });

    expect(result).not.toContain('hobby-icon');
  });

  it('should return null (not render anything) for unknown hobbies', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero, {
      props: {
        name: 'Test',
        about: 'Test',
        hobbies: ['Unknown'],
      },
    });

    expect(result).not.toContain('title="Unknown"');

    const hobbyIcons = result.match(/class="hobby-icon"/g);
    expect(hobbyIcons?.length).toBe(undefined);
  });
});
