import { test, expect } from '@playwright/test';

test('Percentage Working (2 boxes)', async ({ page }) => {
    await page.goto('/lab/checklist');

    // Gets 2 checkboxes
    await page.getByRole('checkbox', {name: '1'}).check();
    await page.getByRole('checkbox', {name: '3'}).check();

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('h2')).toHaveText('2 / 5 (40%)');
});

test('Percentage Working (0 boxes)', async ({ page }) => {
    await page.goto('/lab/checklist');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('h2')).toHaveText('0 / 5 (0%)');
});

test('Percentage Working (5 boxes)', async ({ page }) => {
    await page.goto('/lab/checklist');

    // Gets 5 checkboxes
    await page.getByRole('checkbox', {name: '1'}).check();
    await page.getByRole('checkbox', {name: '2'}).check();
    await page.getByRole('checkbox', {name: '3'}).check();
    await page.getByRole('checkbox', {name: '4'}).check();
    await page.getByRole('checkbox', {name: '5'}).check();

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('h2')).toHaveText('5 / 5 (100%)');
});