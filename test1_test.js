// Author: Selim ÇAĞLI

Feature('Test1');

// Fields
var headerClass = '.header';
var vasitaContainer = 'aside li.category-3517';
// End Fields

Before((I) => {
  I.amOnPage('/');
});

Scenario('test1_test => Header Elemanları Test Ediliyor', (I) => {
  I.seeElement(headerClass +' a.logo');
  I.seeElement(headerClass +' #searchText');
  I.see('Detaylı Arama', headerClass);
  I.see('Giriş Yap', headerClass);
  I.see('Üye Ol', headerClass);
  I.seeElement(headerClass +' #post-new-classified');
});

Scenario('test1_test => Vitrindeki Eleman Sayisı Test Edliliyor', (I) => {
  I.seeNumberOfVisibleElements('div.showcase li', 56);
});

Scenario('test1_test Sol Taraftaki Vasıta Elemanları Test Ediliyor', (I) => {
  I.see('Vasıta', vasitaContainer);
  I.see('Otomobil', vasitaContainer);
  I.see('Arazi, SUV & Pick-up', vasitaContainer);
  I.see('Motosiklet', vasitaContainer);
});
