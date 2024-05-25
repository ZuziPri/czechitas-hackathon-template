import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

// Co testuju
test.describe("Rezervace pokoje na hlavní stránce přes sekci Our Rooms", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await page.goto("https://hackathon24-ova-geeky-goddesses.czechhackitas.cz/en/");
  });

  // jak to testuju 
    //test.only("rezervace pokoje v sekci Our Rooms", async ({ page }) => {
        //await pages.homePage.hamburgerMenu.click();
        //await pages.homePage.sekceRooms.click();
        //await pages.homePage.buttonBooknow.click();
        
        //await expect(pages.homePage.pictureBudgetCabin).toBeVisible();
    //});

  test.only("rezervace pokoje", async ({ page }) => {
    await pages.homePage.buttonSelectHotel.click();
    await pages.homePage.dropBoxHotelOffer.click();
    await pages.homePage.buttonCheckInDate.click();
    await pages.homePage.pickCheckInDate.click();
    await pages.homePage.buttonCheckOutDate.click();
    await pages.homePage.pickCheckOutDate.click();
    await pages.homePage.buttonSearchNow.click();
    await pages.homePage.buttonBookNow.click();

    await expect(pages.homePage.headerSuccessRoomAdded).toBeVisible();

   // await expect(pages.homePage.headerSearchRooms).toBeVisible();
  }) ;

  test('EN - Nepřihlášený uživatel - Rezervace pokoje - Hlavní stránka - sekce Naše pokoje', async ({ page }) => {
    await page.goto('https://hackathon24-ova-geeky-goddesses.czechhackitas.cz/en/');
    await page.getByRole('button').first().click();
    await page.getByRole('link', { name: 'Rooms' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'book now' }).first().click();
    const page1 = await page1Promise;
  });

});
