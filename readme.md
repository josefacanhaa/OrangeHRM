# OrangeHRM Test Automation

Manual and automated testing project for the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login), covering the **Admin**, **PIM**, **Leave**, and **Time** modules. Built as a personal QA study project, combining a structured Test Plan with UI automation using **Playwright**.

## 📌 About the Project

This repository documents the full testing process for a subset of OrangeHRM features:

- ✅ Test planning (scope, objectives, risks, criteria)
- ✅ Manual test cases 
- ✅ Automated test scripts (Playwright + TypeScript)
- ✅ Functional and negative testing scenarios

> This is a living project — new modules and features are added over time. See the [Test Plan](#-test-plan) for current scope.

## 🎯 Scope

| Module | Prioritized Feature |
|---|---|
| **Admin** | System user management (create, edit, delete) |
| **PIM** | Add and edit employee |
| **Leave** | Request and approve leave |
| **Time** | Record timesheet |

Test types: functional testing + negative testing (invalid data, error messages).

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/) — end-to-end test automation
- TypeScript / JavaScript
- Node.js
- Git/GitHub — version control

## 📁 Project Structure

```
.
├── documents/
    |   test-cases/                 # Playwright test specs
        │   ├── admin/
        │   ├── pim/
        │   ├── leave/
        │   └── time/
├── pages/                 # Page Object Model classes
├── playwright.config.ts   # Playwright configuration
├── docs/
│   └── test-plan.md       # Full Test Plan document
└── README.md
```

## 🌐 Test Environment

| Item | Detail |
|---|---|
| System URL | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login |
| Credentials | Default `Admin` demo user (public environment) |
| Browser | Chromium |

> ⚠️ This is a **public demo environment** maintained by OrangeHRM. It may be reset periodically and is shared with other users, which can affect test data. Tests are designed to use unique/dynamic data (e.g., timestamps) to avoid conflicts.

## 📋 Test Plan

The full Test Plan — including scope, objectives, risks, entry/exit criteria, resource planning, and schedule — is available at [`documents/test-plan.md`](documents/test-plan.md).

## 🗺️ Roadmap

- [ ] Write and execute manual test cases in TestRail
- [ ] Set up Playwright project structure
- [ ] Automate Admin module (user CRUD)
- [ ] Automate PIM module (add/edit employee)
- [ ] Automate Leave module (request/approve)
- [ ] Automate Time module (timesheet)
- [ ] Add CI pipeline (GitHub Actions)
- [ ] Expand scope with additional modules

## 👤 Author

Personal QA study project — feedback and suggestions are welcome!

## 📄 License

This project is for educational purposes only and is not affiliated with OrangeHRM.