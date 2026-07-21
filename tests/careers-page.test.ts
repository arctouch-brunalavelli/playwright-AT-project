import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Careers' }).click();
    await page.getByRole('link', { name: 'Our Values' }).click();
    await page.getByRole('heading', { name: 'Our values' }).click();
    await page.getByRole('link', { name: 'FAQ' }).click();
    await page.getByRole('heading', { name: 'Still curious?' }).click();
    await page.getByRole('link', { name: 'Open Positions' }).click();
    await page.getByRole('heading', { name: 'Career opportunities' }).click();
    await page.getByRole('link', { name: 'Working Here' }).click();
    await page.getByRole('heading', { name: 'Working here' }).click();
});