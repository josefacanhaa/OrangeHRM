import { test as base, Page } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";

const ADMIN_USERNAME = 'Admin';
const ADMIN_PASSWORD = 'admin123';

type AuthOptions = {
  username: string;
  password: string;
};

type AuthFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<AuthOptions & AuthFixtures>({
  username: ['Admin', { option: true }],
  password: ['admin123', { option: true }],

  loggedInPage: async ({ page, username, password }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(username, password);
    await loginPage.save()

    await use(page);
  },
});

export { expect } from '@playwright/test';