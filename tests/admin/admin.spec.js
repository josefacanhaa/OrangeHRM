import { test, expect } from '../../fixtures/auth.fixtures';
import { AdminPage } from '../../pages/AdminPage';

test('TC_ADMIN_001 - Add a new system user with valid data', async ({ loggedInPage }) => {
  const admin = new AdminPage(loggedInPage);

  await admin.navigateToAddAdminUserPage();
  await admin.goToAddUser();

  await admin.fillAdminUserForm();

  await loggedInPage.waitForTimeout(20000);  

  await admin.navigateToAddAdminUserPage();

});


