import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Newsletter' }).click();
    await page.getByRole('heading', { name: 'ArcTouch Touchpoints' }).click();
});