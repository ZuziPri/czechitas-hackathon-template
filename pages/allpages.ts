import { Page } from "@playwright/test";
import { TemplatePage } from "./template-page";
import { homePage } from "./homePage";


// abys mohla pouzivat await pages.templatePage, tak je potreba si ji tady nadefinovat.
// to znamena, ze si vytvoris novou instanci tridy TemplatePage (nebo Tvoji tridy) a predas ji page (kterou dostanes v konstruktoru)
// vice mene udelej to stejne, jak je ta TemplatePage :) a melo by to fungovat :) 
export class AllPages {
  readonly page: Page;
  readonly homePage: homePage;

  // 
  readonly templatePage: TemplatePage;

  constructor(page: Page) {
    this.page = page;
    this.templatePage = new TemplatePage(page);
    this.homePage = new homePage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
