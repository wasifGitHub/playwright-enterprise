import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test('test', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("wasifahmad899.d26d11120cda@agentforce.com");
    await loginPage.fillPassword("Newuser135!");
    
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
});