// Author: Selim ÇAĞLI

var driver = require('webdriverio');
var categoryClass = '.category-row .category-selection .category-list-wrapper';

Feature('Test2');

Scenario('test2_test => Detayli Arama Testi Yapılıyor', (I) => {
  I.amOnPage('/');
  
  I.click('a[href="https://www.sahibinden.com/arama/detayli"]'); //Detaylı arama
  I.click( categoryClass + ' span[href="/arama/detayli?category=3517"]'); //Vasıta
  I.click(categoryClass + ' span[href="/arama/detayli?category=3532"]');  //Motosiklet
  I.clickFromListSahibinden(categoryClass + ' span[href="/arama/detayli?category=11757"]'); //Yamaha
  I.wait(5);
  I.clickFromListSahibinden(categoryClass + ' span[href="/arama/detayli?category=221415"]'); //MT07 ABS
  I.wait(5);

  
  I.fillField('a269_min', '1998'); //Yıl başlangıç
  I.fillField('a269_max', '1999'); //Yıl bitiş
    
  I.setSahibindenCheckState('a1331_option_3', true); // Gri renk
  I.setSahibindenCheckState('a106200', true);  // Çekiş Kontrolü
    
  I.scrollPageToBottom();
  I.click('Arama Yap');
  
  I.see('Arama filtrelerinize uygun ilan bulunamadı');
  
});