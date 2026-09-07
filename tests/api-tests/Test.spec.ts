import { test, expect, devices } from '@playwright/test';

test('my api test', async ({request}) => {
  const response = await request.get('/products');

  const responseBody = await response.json();

  expect(response.status()).toBe(200);

  expect(response.headers()['content-type']).toBe('application/json');

});