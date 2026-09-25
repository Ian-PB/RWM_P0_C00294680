import { test, expect } from '@playwright/test';

test('Page exists', async ({ page }) => {
    await page.goto('/lab/checklist');

    await expect(page.getByTestId('title')).toHaveText('Progress Checklist Page');
});