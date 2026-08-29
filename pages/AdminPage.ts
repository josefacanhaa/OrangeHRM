import { Page, Locator } from "@playwright/test";


export class AdminPage {

  private adminMenuLink: Locator;
  private addButton: Locator;

  //UserRole Field
  private userRole: Locator;
  private listBox: Locator;

  //Status Field
  private status: Locator;
  private listBoxStatus: Locator;

  //Employee Name Field 
  private employeeName: Locator;
  private listBoxEmployee: Locator;

  private userName: Locator;
  private password: Locator;
  private confirmPassword: Locator;

  private submitButton: Locator;

  constructor(private page: Page) {
    this.addButton = page.getByRole('button', { name: 'Add'})
    this.adminMenuLink = page.getByRole('link', { name: 'Admin' });

    //UserRole Field
    this.userRole = page.locator('.oxd-select-text').nth(0);
    this.listBox = page.getByRole('listbox');

    //Status Field
    this.listBoxStatus = page.getByRole('listbox');
    this.status = page.locator('.oxd-select-text').nth(1);

    //Employee Field
    this.listBoxEmployee = page.getByRole('listbox');
    this.employeeName = page.locator('input[placeholder="Type for hints..."]');

    //Usename Field
    this.userName = page.locator('input.oxd-input').nth(1);

    this.password = page.locator('input[type="password"]').nth(0);
    this.confirmPassword = page.locator('input[type="password"]').nth(1);

    //Submit Button
    this.submitButton =  page.locator('button[type="submit"]');

  }

  async goToAddUser() {
    await this.addButton.click();
  }

  async fillUserForm(username: string, password: string, role: string) {
    await this.page.selectOption('[name="userRole"]', role);
    await this.page.fill('[name="username"]', username);
    await this.page.fill('[name="password"]', password);
  }

  async navigateToAddAdminUserPage(){
    await this.adminMenuLink.click();
  }

  async fillAdminUserForm() {

    //UserRole Field
    await this.userRole.click();
    await this.listBox.getByRole('option').nth(1).click();

    //Status Field
    await this.status.click();
    await this.listBoxStatus.getByRole('option').nth(1).click()

    //Employee Name
    await this.employeeName.fill("d");
    await this.listBoxEmployee.waitFor({ state: 'visible' });
    await this.listBoxEmployee.getByRole('option').nth(1).click();

    await this.userName.fill("jose.silva")

    await this.password.fill("OrangeHRM1")
    await this.confirmPassword.fill("OrangeHRM1");

    await this.submitButton.click();
  }

  async save() {
    await this.page.click('button:has-text("Save")');
  }
}