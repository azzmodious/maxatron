import { BobPage } from './app.po';

describe('bob App', () => {
  let page: BobPage;

  beforeEach(() => {
    page = new BobPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
