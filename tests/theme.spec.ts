import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
  test('theme toggle changes class and text', async ({ page }) => {
    await page.goto('/');

    const themeBtn = page.locator('#theme-toggle');
    const html = page.locator('html');

    await expect(themeBtn).toHaveText('DARK MODE');
    await expect(html).not.toHaveClass(/dark_mode/);

    await themeBtn.click();
    await expect(html).toHaveClass(/dark_mode/);
    await expect(themeBtn).toHaveText('LIGHT MODE');

    await themeBtn.click();
    await expect(html).not.toHaveClass(/dark_mode/);
    await expect(themeBtn).toHaveText('DARK MODE');
  });

  test('navigation links work and scroll to sections', async ({ page }) => {
    await page.goto('/');

    await page.click('a[href="#experience"]');

    await expect(page).toHaveURL(/.*#experience/);

    const heading = page.getByRole('heading', { name: 'Work Experience' });
    await expect(heading).toBeInViewport();
  });

  test('should scroll navigation between sections', async ({ page }) => {
    await page.goto('/');

    await page.click('a[href="#social"]');

    await expect(page).toHaveURL(/.*#social/);

    let heading = page.getByRole('heading', { name: 'Social Media' });
    await expect(heading).toBeInViewport();

    await page.click('a[href="#skills"]');

    await expect(page).toHaveURL(/.*#skills/);

    heading = page.getByRole('heading', { name: 'Core Skills' });
    await expect(heading).toBeInViewport();

    await page.click('a[href="#education"]');

    await expect(page).toHaveURL(/.*#education/);

    heading = page.getByRole('heading', { name: 'Education' });
    await expect(heading).toBeInViewport();
  });
});
