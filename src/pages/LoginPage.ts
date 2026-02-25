import { Page } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

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
        logger.info("Navigated to login.salesforce.com");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernaameInputSelector).fill(username);
        logger.info("Filled username");

    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
        logger.info("Filled pasword");
    }
    
    async clickLoginButton() {
        // await this.page.
        // locator(this.loginButtonSelector).click({ timeout: 10000 }).catch((error) => {
        //     logger.error(`Error clicking login button: ${error}`);
        //     throw error; // rethrow the error if needed
        // }).then(() => {
        //     logger.info("Clicked login button");
        // });
        await this.page.locator(this.loginButtonSelector).click();
        logger.info("Clicked login button");
        // wait for 10 seconds
        await this.page.waitForTimeout(10000);


        const homePage = new HomePage(this.page);
        return homePage;
    }


  
}