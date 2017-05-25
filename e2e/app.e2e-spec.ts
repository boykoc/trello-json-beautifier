import { TrelloJsonBeautifierPage } from './app.po';

describe('trello-json-beautifier App', () => {
  let page: TrelloJsonBeautifierPage;

  beforeEach(() => {
    page = new TrelloJsonBeautifierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
