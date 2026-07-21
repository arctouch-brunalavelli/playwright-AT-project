import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    await page.getByRole('link', { name: 'Strategy', exact: true }).click();
    await page.getByRole('heading', { name: 'Strategy' }).click();
    await page.getByRole('link', { name: 'Design', exact: true }).click();
    await page.getByRole('heading', { name: 'Design', exact: true }).click();
    await page.getByRole('link', { name: 'Development', exact: true }).click();
    await page.getByRole('heading', { name: 'Development', exact: true }).click();
    await page.getByRole('link', { name: 'Growth', exact: true }).click();
    await page.getByRole('heading', { name: 'Growth', exact: true }).click();
    await page.getByRole('link', { name: 'Industry News', exact: true }).click();
    await page.getByRole('heading', { name: 'Industry News' }).click();
    await page.getByRole('link', { name: 'Strategy', exact: true }).click();
    await page.getByRole('heading', { name: 'Strategy' }).click();
});