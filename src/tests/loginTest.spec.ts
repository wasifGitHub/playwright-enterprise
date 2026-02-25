import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {decrypt, encrypt} from "../utils/CryptojsUtil";
import { encryptEnvFile,decryptEnvFile } from "../utils/EncryptEnvFile";
import logger from "../utils/LoggerUtil";


test('test', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // ! in typescript is used to tell the compiler that the value will not be null or undefined (avoid typeScript error)
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    // userid=wasifahmad899.d26d11120cda@agentforce.com
    // password=Newuser135!

    const homePage = await loginPage.clickLoginButton();
    await page.waitForTimeout(15000);
    await homePage.expectServiceTitleToBeVisible();
    logger.info("Test for login is completed.");
});

test.skip("Sample env test", async({page}) =>{
    // const plaintext = "Hello, Mars!";
    // const encryptedText = encrypt(plaintext);
    // console.log('SALT: ', process.env.SALT);
    // console.log('Encrypted: ', encryptedText);

    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted: ', decryptedText);
    encryptEnvFile();
    // console.log(decrypt(""));
})

// test("Sample env test", async({page}) =>{
//     console.log(process.env.NODE_ENV);
//     console.log(process.env.userid);
//     console.log(process.env.password);
// })