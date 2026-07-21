import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Company' }).click();
    await page.getByRole('link', { name: 'Our Story' }).click();
    await page.getByRole('heading', { name: 'Our Story' }).click();
    await page.getByRole('link', { name: 'Our Values' }).click();
    await page.getByRole('heading', { name: 'Our Values' }).click();
    await page.getByRole('link', { name: 'Leadership' }).click();
    await page.getByRole('heading', { name: 'Leadership Team' }).click();
    await page.getByRole('link', { name: 'About Us' }).click();
    await page.getByRole('heading', { name: 'About Us' }).click();
});