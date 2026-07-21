import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://arctouch.com/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Portfolio', exact: true }).click();
    await page.getByRole('combobox', { name: 'All Services' }).click();
    await page.getByText('Product Management').click();
    await page.getByRole('combobox', { name: 'All Projects' }).click();
    await page.getByText('Apps', { exact: true }).click();
    await page.getByRole('combobox', { name: 'Any Company Size' }).click();
    await page.getByText('Medium Companies').click();
    await page.getByRole('combobox', { name: 'All Technologies' }).click();
    await page.getByText('Native App').click();
    await page.getByRole('link', { name: 'Featured Work', exact: true }).first().click();
    await page.getByRole('link', { name: 'breadcrumbs Portfolio' }).click();
    // await page.getByRole('combobox').filter({ hasText: 'Native AppClear' }).getByLabel('Clear selection').click();
    // await page.getByRole('combobox').filter({ hasText: 'Medium CompaniesClear' }).getByLabel('Clear selection').click();
    // await page.getByRole('combobox').filter({ hasText: 'AppsClear' }).getByLabel('Clear selection').click();
    // await page.getByRole('button', { name: 'Clear selection' }).click();
});