# Playwright Interview Questions & Answers

## General Playwright

**Q1: What is Playwright and how is it different from Selenium or Cypress?**
> Playwright is a modern end-to-end testing framework developed by Microsoft that supports Chromium, Firefox, and WebKit. It provides auto-waiting, cross-browser support, and better API testing capabilities. It supports both headless and headed execution.

**Q2: What browsers does Playwright support?**
> Chromium (Chrome, Edge), Firefox, and WebKit (Safari).

**Q3: What are Playwright projects and how are they used?**
> Projects in Playwright allow running tests across multiple browsers or devices simultaneously, defined in `playwright.config.ts`.

**Q4: What is the difference between `page.goto()` and `request.get()`?**
> `page.goto()` navigates a browser page for UI testing. `request.get()` is used for direct API calls without launching a browser.

**Q5: What is auto-waiting?**
> Playwright automatically waits for elements to be ready before performing actions, reducing flakiness.

## API Testing

**Q6: How do you perform an API GET call using Playwright?**
```ts
const context = await request.newContext();
const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');
```

**Q7: What is `APIRequestContext`?**
> It’s a utility in Playwright to perform API testing and mocking without using a browser.

**Q8: What causes a 401 Unauthorized error in CI?**
> Missing headers, expired tokens, or network restrictions on the CI server.

## UI Testing & Navigation

**Q9: What causes a test with `page.goto('/login')` to fail with 404?**
> The base URL might be wrong or the page doesn’t exist.

**Q10: What causes `expect(locator).toBeVisible()` to fail?**
> The element doesn’t exist, is hidden, or took too long to render.

**Q11: How do you handle dynamic content?**
> Use `page.waitForSelector()` or increase timeout with `expect(...).toBeVisible({ timeout: 10000 })`.

## File Upload/Download

**Q12: How do you upload a file in Playwright?**
```ts
await page.setInputFiles('input[type="file"]', 'tests/assets/sample.txt');
```

**Q13: Why might file upload fail in CI?**
> The file path doesn’t exist in the CI environment. Use a relative path inside the repo.

**Q14: How do you handle downloads?**
```ts
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('a.download-link')
]);
```

## Selectors and Waits

**Q15: How do you find an element inside an iframe?**
```ts
const frame = page.frameLocator('iframe');
await frame.locator('button:has-text("I agree")').click();
```

**Q16: What’s the difference between `waitForSelector()` and `expect().toBeVisible()`?**
> `waitForSelector()` ensures the DOM is ready; `expect()` also checks visibility and throws helpful errors.

## CI/CD Debugging

**Q17: How do you debug flaky tests in GitHub Actions?**
> Use `--trace on`, check generated trace files using `npx playwright show-trace trace.zip`.

**Q18: Why do tests pass locally but fail in CI?**
> Differences in timing, browser behavior, or missing files/assets.

**Q19: What’s the use of `screenshots` and `traces` in Playwright?**
> To debug failures by recording DOM state, logs, and screenshots during execution.

**Q20: How do you ensure file upload tests run in both local and CI?**
> Use relative paths and commit the test file (`tests/assets/sample.txt`) into the repo.

## Advanced Real-World Scenarios

**Q21: How do you handle region-specific cookie popups like Google’s consent screen?**
> Detect iframes and buttons using `frameLocator` and click the consent button.

**Q22: What is your approach when selectors start failing due to DOM changes?**
> Switch to more stable selectors like `data-testid`, or use `hasText`, `nth`, or role selectors.

**Q23: What are `test.describe`, `test.beforeEach`, and `test.step()` used for?**
> `describe`: group tests; `beforeEach`: setup logic; `step`: add traceable steps to a test.

**Q24: What’s the difference between headless and headed mode?**
> Headless runs without GUI, faster for CI. Headed is good for debugging.

**Q25: How do you organize tests for better scalability?**
> Use Page Object Model (POM), tag tests using `.only`/`.skip`, and group via folders or features.