import { EmbedObjPage } from './app.po';

describe('embed-obj App', () => {
  let page: EmbedObjPage;

  beforeEach(() => {
    page = new EmbedObjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
