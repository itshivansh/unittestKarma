import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a nav element with bootstrap class "navbar"', () => {
    page.navigateTo();
    expect(page.getLinksForBootstrap(0)).toEqual('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    expect(page.getLinksForBootstrap(1)).toEqual('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  });

  it('should have a nav element with bootstrap class "navbar"', () => {
    page.navigateTo();
    expect(page.getScriptsForBoostrap(0)).toEqual('https://code.jquery.com/jquery-3.3.1.slim.min.js');
    expect(page.getScriptsForBoostrap(1)).toEqual('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
    expect(page.getScriptsForBoostrap(2)).toEqual('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
