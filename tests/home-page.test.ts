import { test, expect } from '@playwright/test';

//Testing Contact Us form from the Home page
test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('heading', { name: 'We help companies create' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).click();
    await page.getByRole('textbox', { name: 'Message' }).fill('Testing forms.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();
    await page.getByText('Thank you for your message.').click();
    await page.getByRole('button', { name: 'Close notification' }).click();
});