import { Locator, Page, expect } from "@playwright/test";

export class homePage {
  readonly page: Page;

  readonly hamburgerMenu: Locator;
  //readonly sekceRooms: Locator;
  //readonly buttonBooknow: Locator;
  readonly pictureBudgetCabin: Locator;
  readonly buttonSelectHotel: Locator;
  readonly dropBoxHotelOffer: Locator;
  readonly buttonCheckInDate: Locator;
  readonly pickCheckInDate: Locator;
  readonly buttonCheckOutDate: Locator;
  readonly pickCheckOutDate: Locator;
  readonly buttonSearchNow: Locator;
  readonly headerSearchRooms: Locator;
  readonly buttonBookNow: Locator;
  readonly headerSuccessRoomAdded: Locator;

  constructor(page: Page) {
    this.page = page;

    // A ted naplnime lokatory - najdeme si elementy na strance
    this.hamburgerMenu = page.locator(".nav_toggle");
    //this.sekceRooms = page.getByRole('link', { href='https://hackathon24-ova-geeky-goddesses.czechhackitas.cz/en/#hotelRoomsBlock' });
    //this.buttonBooknow = page.getByRole('link', { href: 'https://hackathon24-ova-geeky-goddesses.czechhackitas.cz/en/home/1-super-delux-rooms.html'});
    this.pictureBudgetCabin = page.getByAltText("Budget cabin");
    this.buttonSelectHotel = page.locator("#id_hotel_button");
    this.dropBoxHotelOffer = page.locator(".search_result_li");
    this.buttonCheckInDate = page.getByPlaceholder("Check In Date");
    this.pickCheckInDate = page.getByRole('link', { name: '30' });
    this.buttonCheckOutDate = page.getByPlaceholder("Check Out Date");
    this.pickCheckOutDate = page.getByRole('link', { name: '31' });
    this.buttonSearchNow = page.locator("#search_room_submit");
    this.headerSearchRooms = page.locator(".header-rmsearch-wrapper");
    this.buttonBookNow = page.locator('[data-id-product="1"]') ;
    this.headerSuccessRoomAdded = page.getByText("Room successfully added to your cart");

  }
}