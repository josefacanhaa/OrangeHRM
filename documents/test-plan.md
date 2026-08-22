# Test Plan — OrangeHRM Demo

**System Under Test:** OrangeHRM Demo
**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
**Date:** August 2026
**Owner:** You (Test Manager / Tester / Automation Engineer)

> **Note:** This is a living document. New modules or features can be added later — just update the Scope, Test Cases, and Schedule sections accordingly.

---

## 1. Purpose

This document describes the scope, strategy, resources, and schedule of the testing activities for the **Admin**, **PIM**, **Leave**, and **Time** modules of the OrangeHRM system (public demo environment), focused on personal QA practice (manual testing and automation with Playwright).

---

## 2. Scope

### 2.1 In-Scope

| Module | Prioritized Feature |
|---|---|
| **Admin** | System user management (create, edit, delete) |
| **PIM** | Add and edit employee |
| **Leave** | Request and approve leave |
| **Time** | Record timesheet |

### 2.2 Out-of-Scope

- Other sub-modules not prioritized within Admin, PIM, Leave, and Time
- Other modules not mentioned (e.g., Recruitment, Performance, Dashboard)
- Performance, load, and security testing
- Cross-browser testing (outside of Chromium)

*(This list can be revisited and expanded as new features are added to the plan.)*

### 2.3 Test Type

- Functional testing
- Negative testing (invalid data, error messages)

### 2.4 Approach

- Manual tests documented in TestRail
- Automation of flows with Playwright (automation scope to be defined during execution)

---

## 3. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| The demo environment is periodically reset by OrangeHRM | Data created during testing may be lost | Do not rely on persistent data across test sessions; document this in the plan |
| Publicly shared environment (other people testing at the same time) | Inconsistent data, conflicts (e.g., user/employee already exists) | Use unique data/names (timestamps) in tests |

---

## 4. Test Objectives

- Verify that user CRUD operations (Admin) work correctly, including required-field validations
- Verify that employees can be added and edited in PIM, with correct handling of invalid data
- Verify that the leave request and approval flow (Leave) works correctly, including error scenarios (e.g., invalid dates, insufficient balance)
- Verify that timesheet recording (Time) correctly accepts and validates working-hours data

---

## 5. Test Criteria

- **Exit Criteria:** 100% of planned test cases executed (no minimum pass-rate requirement, since the goal is learning rather than certifying the system's quality).

---

## 6. Resource Planning

### 6.1 Human Resources

| Role | Owner | Tasks |
|---|---|---|
| Test Manager / Tester / Automation Engineer | You | Analyze requirements, write test cases, execute manual tests, then automate with Playwright |

### 6.2 System Resources

| Resource | Description |
|---|---|
| System under test | https://opensource-demo.orangehrmlive.com (public demo environment) |
| Test management tool | TestRail |
| Automation tool | Playwright |
| Browser | Chromium |
| Version control | Git/GitHub (recommended) |

---

## 7. Test Environment

| Item | Detail |
|---|---|
| System URL | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login |
| Credentials | Default Admin user for the public demo (`Admin` / `admin123`) |
| Browser(s) | Chromium (via Playwright) |
| Operating system | Tester's local environment |
| Runtime | Node.js + Playwright installed locally |
| Case management | TestRail |

---

## 8. Schedule & Estimation

Pace: intensive days.

| Task | Estimate | Days |
|---|---|---|
| Write test cases (4 modules) in TestRail | 4-6h | Day 1 |
| Execute manual tests (Admin + PIM) | 3-4h | Day 2 |
| Execute manual tests (Leave + Time) | 3-4h | Day 2-3 |
| Playwright setup + first scripts | 4-5h | Day 3 |
| Automate prioritized critical flows | 6-8h | Day 4-5 |
| Review, final report, and adjustments | 2-3h | Day 5 |

---

## 9. Test Deliverables

**Before execution:**
- This Test Plan document
- Test cases documented in TestRail

**During execution:**
- Playwright automation scripts
- Execution logs (manual and automated)

**After execution:**
- Test results report (pass/fail per module)
- Defect/bug report (if any)

---

## 10. Next Steps

1. Register test cases in TestRail, one by one, per module
2. Execute manual tests and log results
3. Set up the Playwright project (`npm init playwright@latest`)
4. Automate the prioritized flows
5. Consolidate the final execution report
6. Add new modules/features to the scope as needed and repeat the cycle