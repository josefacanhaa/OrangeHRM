import { test as base, Page } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";

const ADMIN_USERNAME = 'Admin';
const ADMIN_PASSWORD = 'admin123';

export const test = base.extend<{ loggedInPage: Page }>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(ADMIN_USERNAME, ADMIN_PASSWORD);
    await loginPage.save();
    
    // Aqui o teste recebe a página já logada
    await use(page);

  },
});

export { expect } from '@playwright/test';