import { test, expect } from '@playwright/test';

const BASE_URL = 'https://arctouch.com';

test.describe('Home page - Contact Us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('heading', { name: 'We help companies create' }).click();
  });

  test('should submit successfully with valid data', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message.')).toBeVisible();
  });

  test('should keep submit button disabled when required fields are empty', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: 'Send Message' });

    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });

  test('should keep submit button disabled with invalid email format', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');

    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });
});

test.describe('Services page - Contact Us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/services`);
    await page.getByRole('textbox', { name: 'First Name' }).scrollIntoViewIfNeeded();
  });

  test('should submit successfully with valid data', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message.')).toBeVisible();
  });

  test('should keep submit button disabled when required fields are empty', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: 'Send Message' });

    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });

  test('should keep submit button disabled with invalid email format', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');

    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });
});

test.describe('Portfolio page - Contact Us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/portfolio`);
    await page.getByRole('textbox', { name: 'First Name' }).scrollIntoViewIfNeeded();
  });

  test('should submit successfully with valid data', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message.')).toBeVisible();
  });

  test('should keep submit button disabled when required fields are empty', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: 'Send Message' });

    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });

  test('should keep submit button disabled with invalid email format', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');

    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });
});

test.describe('Company page - Contact Us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/company`);
    await page.getByRole('textbox', { name: 'First Name' }).scrollIntoViewIfNeeded();
  });

  test('should submit successfully with valid data', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message.')).toBeVisible();
  });

  test('should keep submit button disabled when required fields are empty', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: 'Send Message' });

    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });

  test('should keep submit button disabled with invalid email format', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');

    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });
});

test.describe('Resources page - Contact Us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/resources`);
    await page.getByRole('textbox', { name: 'First Name' }).scrollIntoViewIfNeeded();
  });

  test('should submit successfully with valid data', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('qa@test.com');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');
    await page.getByRole('checkbox', { name: 'Subscribe to the ArcTouch' }).check();
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message.')).toBeVisible();
  });

  test('should keep submit button disabled when required fields are empty', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: 'Send Message' });

    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });

  test('should keep submit button disabled with invalid email format', async ({ page }) => {
    await page.getByRole('textbox', { name: 'First Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Message' }).fill('Automated test message.');

    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await expect(submitButton).toHaveAttribute('data-disabled', 'true');
  });
});
