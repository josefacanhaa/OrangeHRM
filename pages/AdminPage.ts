import { Page, Locator } from "@playwright/test";


export class AdminPage {

  private adminMenuLink: Locator;
//   private employeeNameInput: Locator;

  constructor(private page: Page) {
    this.adminMenuLink = page.getByRole('link', { name: 'Admin' });
  }

  async goToAddUser() {
    await this.adminMenuLink.click();
  }

  async fillUserForm(username: string, password: string, role: string) {
    await this.page.selectOption('[name="userRole"]', role);
    await this.page.fill('[name="username"]', username);
    await this.page.fill('[name="password"]', password);
  }

  async save() {
    await this.page.click('button:has-text("Save")');
  }
}