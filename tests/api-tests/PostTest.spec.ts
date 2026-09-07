import { test, expect } from '@playwright/test';

test('create an order with POST', {tag: '@smoke'}, async ({ request }) => {
  const order = {
    customerDetails: {
      firstName: 'bbg',
      lastName: 'fgdfg',
      email: 'ggfg@dghs.com',
      address: 'street',
      city: 'city',
      country: 'United States',
      zipCode: '00000',
    },
    items: [
      {
        productId: '501',
        quantity: 1,
      },
    ],
  };

  const response = await request.post('/orders', {
    data: order,
  });

  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  const orderId = responseBody.data.orderId;

  expect(response.status()).toBe(201);
  expect(response.headers()['content-type']).toContain('application/json');

  expect(responseBody).toMatchObject({
    success: true,
    data: {
      message: 'Order created successfully',
      orderId: expect.any(String),
    },
  });
});
