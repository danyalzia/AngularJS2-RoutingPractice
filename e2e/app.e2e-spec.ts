import { AngularJS2RoutingPracticePage } from './app.po';

describe('angular-js2-routing-practice App', function() {
  let page: AngularJS2RoutingPracticePage;

  beforeEach(() => {
    page = new AngularJS2RoutingPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
