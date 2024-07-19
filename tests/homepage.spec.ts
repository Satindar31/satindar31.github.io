import { test, expect } from "@playwright/test";

test("home page title check", async ({ page }) => {
  await page.goto("http://localhost:4321");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Satindar's Den");
});

test("home page h1 check", async ({ page }) => {
  await page.waitForTimeout(10000);
  await page.goto("http://localhost:4321");

  setTimeout(async () => {
    await expect(page.locator("h1")).toContainText("Welcome to Satindar's Den");
  }, 5000);
});

test("home page image check", async ({ page }) => {
  await page.goto("http://localhost:4321");
  // Expect an image to be present in the page.
  await expect(page.locator("img")).toBeVisible();
})

