# Playwright TypeScript Interview Repo

A fully-featured automation test suite using Playwright with TypeScript. Designed for interview preparation and real-world frameworks.

## 🔧 Features
- Cross-browser support
- Page Object Model
- API + UI Testing
- Upload & Download examples
- Configurable retries, trace, screenshots
- Allure & HTML reporter

## 📦 Getting Started
```bash
git clone <repo-url>
cd playwright-ts-interview-repo
npm install
npx playwright test
```

## 🧪 Run Tests
```bash
npx playwright test                # Run all tests
npx playwright test --project=Chrome
npx playwright show-report        # View HTML report
```

## 💡 Tips
- Add `.only` or `.skip` on tests for isolation
- Use `--debug` or `PWDEBUG=1` for debugging
- Store login sessions using `storageState`