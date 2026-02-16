import { Page } from "@playwright/test";
import HomePage from "./HomePage";

// Export default will make sure we can share our code to the next classes or other calsses to other test as well. 
export default class LoginPage {
    private readonly usernaameInputSelector: string = "#username";
    private readonly passwordInputSelector: string = "#password";
    private readonly loginButtonSelector: string = "#Login";

    // constructor will have the private page: This is a concise code which will make sure we are passing page object to the Constructor and it will have its own local page.
    //  Page, this will allow us to use the page object in our class and we can use it to interact with the elements on the page.
    constructor(private page: Page) {
        
    }

    async navigateToLoginPage() {
        await this.page.goto("/");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernaameInputSelector).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }
    
    async clickLoginButton() {
        await this.page.
        locator(this.loginButtonSelector).click().catch((error) => {
            console.error("Error clicking login button:", error);
            throw error; // Rethrow the error after logging it
        });

        const homePage = new HomePage(this.page);
        return homePage;
    }


  
}