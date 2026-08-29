import { Page, Locator} from "@playwright/test";

export class LoginPage{

  private usernameInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async save() {
    await this.submitButton.click();
  }

}