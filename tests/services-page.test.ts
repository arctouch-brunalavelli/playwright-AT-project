import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('heading', { name: 'We help companies create' }).click();
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('navigation', { name: 'primary' }).click();
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    await page.getByRole('link', { name: 'Our Expertise' }).click();
    await page.getByRole('link', { name: 'Working Together' }).click();
    await page.getByRole('link', { name: 'Our Expertise' }).click();
    await page.getByRole('link', { name: 'What We Do' }).click();
});