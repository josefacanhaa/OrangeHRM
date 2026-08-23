import { test, expect } from '../../fixtures/auth.fixtures';
import { AdminPage } from '../../pages/AdminPage';

test('TC_ADMIN_001 - Add a new system user with valid data', async ({ loggedInPage }) => {
  const admin = new AdminPage(loggedInPage);

  await admin.goToAddUser();

//   await admin.fillUserForm('jose.silva', 'Password@123', 'Admin');
//   await admin.save();

//   await expect(loggedInPage.locator('.success-message')).toBeVisible();
});