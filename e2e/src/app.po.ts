import { browser, $$ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLinksForBootstrap(i: number) {
    return $$('link[rel="stylesheet"]').get(i).getAttribute('href');
  }

  getScriptsForBoostrap(i: number) {
    return $$('script').get(i).getAttribute('src');
  }
}
