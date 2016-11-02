import { browser, element, by } from 'protractor';

export class AngularJS2RoutingPracticePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
