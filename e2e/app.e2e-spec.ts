import { EthancommunionPage } from './app.po';

describe('ethancommunion App', () => {
  let page: EthancommunionPage;

  beforeEach(() => {
    page = new EthancommunionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
