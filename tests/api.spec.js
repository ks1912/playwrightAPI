// @ts-check
const { test, expect } = require("@playwright/test");

test("Interceptign the api and updating the response", async ({ page }) => {
  await page.goto("http://192.168.1.5:8080/");
  await page.waitForTimeout(3000);
  await expect(page.locator(".btn")).toBeVisible();
  await page.locator(".btn").click();
  await expect(page.locator("h1#name")).toContainText(/Kunal/);
  await page.waitForTimeout(2000);
  await page.route("http://localhost:3000/api/name", (route) => {
    route.fulfill({
      body: JSON.stringify({ name: "Dinesh" }),
    });
  });
  // await page.goto("http://192.168.1.5:8080/");
  // await page.waitForTimeout(5000);
  // await expect(page.locator(".btn")).toBeVisible();
  await page.locator(".btn").click();
  await expect(page.locator("h1#name")).toContainText(/Dinesh/);
  await page.waitForTimeout(5000);
});
