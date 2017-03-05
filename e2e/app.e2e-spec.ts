import { CoffeeShopAppPage } from './app.po';

describe('coffee-shop-app App', () => {
  let page: CoffeeShopAppPage;

  beforeEach(() => {
    page = new CoffeeShopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
