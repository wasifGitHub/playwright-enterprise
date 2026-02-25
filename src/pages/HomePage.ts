import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

export default class HomePage {
  private readonly serviceTitleLocator = "Service";
  private readonly contactsLinkLocator = "Contacts";

  // private page: Page;
  // constructor(page: Page) {
  //   this.page = page;
  // }

  constructor(private page: Page) {

  }

  async expectServiceTitleToBeVisible() {
    await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout:15000}).catch((error) =>{
      logger.error(`Error clicking login button:: ${error}`);
      throw error; // Rethrow the error after logging it
    }).then(() => {
      logger.info("Service Title is visible");
    });
  }

   async navigateToContactTab(){

    await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
    logger.info("Contacts Tab is visible")
    await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
    logger.info("Contacts Tab is clicked")
    return new ContactPage(this.page);
    
  }

  async navigateToCaseTab(){

    await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
    logger.info("Contacts Tab is visible")
    await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
    logger.info("Contacts Tab is clicked")
    return new ContactPage(this.page);
    
  }
}