import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'Design Templates', exact: true }).click();
    await page.getByRole('heading', { name: 'Design Templates', exact: true }).click();
    await page.getByRole('link', { name: 'Checklists' }).click();
    await page.getByRole('heading', { name: 'Checklists' }).click();
    await page.getByRole('link', { name: 'Books' }).click();
    await page.getByRole('heading', { name: 'Books' }).click();
});