// Author: Selim ÇAĞLI

Feature('Test3');

Before((I) => {
  I.amOnPage('/');
});

Scenario('test3_test => Yamaha MT07 ile Normal Arama Testi Yapılıyor', (I) => {
  I.fillField('#searchText', 'Yamaha MT07');
  I.click('.header button[value="Ara"]');
  I.click('a[data-category="3517"]');
  I.seeNumberOfVisibleElements('.searchResultsRowClass tr.searchResultsItem', 20);
});

Scenario('test3_test => Yamaha MT09 ile Normal Arama Testi Yapılıyor', (I) => {
  I.fillField('#searchText', 'Yamaha MT09');
  I.click('.header button[value="Ara"]');
  I.seeNumberOfVisibleElements('.searchResultsRowClass tr.searchResultsItem', 14);
});

Scenario('test3_test => Yamaha MT25 ile Normal Arama Testi Yapılıyor', (I) => {
  I.fillField('#searchText', 'Yamaha MT25');
  I.click('.header button[value="Ara"]');
  I.seeNumberOfVisibleElements('.searchResultsRowClass tr.searchResultsItem', 20);
});
