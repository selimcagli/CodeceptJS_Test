# CodeceptJS Test

Test adımlarına başlamadan önce Bilgisayar node.js ve Java JDK kurulu olmalıdır. (Testlerin koşulması için Firefox ve Chrome kurulu olmalıdır, browser codecept.json config dosyası içerisinden değiştirilebilir.) 

Testler 2 şekilde yapılabilir
1. Test içerisindeki ShellScriptler çalıştırılarak. 
    - Sırası ile:
        - SetupSelenumAndStart.sh
        - SetupAndRunTests.sh
    - Kurulumlardan sonra tekrar test çalıştırılmak istendiğinde ise aşağıdaki shellscript in çalıştırılması yeterlidir
        - RunTests.sh

2. Aşağıdaki Yöntemler sırası ile uygulanarak.

Projeyi indirdikten sonra aşağıdaki adımları izleyerek Proje1 testini gerçekleştirebilirsiniz. (Proje Komut satırı kullanılarak indirilebilir  => git clone https://github.com/selimcagli/CodeceptJS_Test.git)

-	Proje testi için öncelikle “selenium-standalone” u indirip çalıştırmak gerekiyor. “selenium-standalone” u indirmek için: Projenin root klasörü üzerinden komut satırı açılarak:
    - npm install selenium-standalone@latest
    - selenium-standalone install
    - selenium-standalone start

-	Daha sonra CodeceptJS kütüphanesinin  1.1.1 versiyonunu npm aracılığı ile indirmek gerekiyor. CodeceptJS i indirmek için, aşağıdaki komut u çalıştırmak yeterlidir.
    - npm install codeceptjs@1.1.1

-	Testi çalıştırmak için Projenin root klasöründen /node_modules/.bin/ klasöründe aşağıdaki komut satırını çalıştırmak yeterlidir.
    - ./codeceptjs run --config=./../../codecept.json --steps

-	Projedeki testleri Paralel olarak çalıştırmak için aşağıdaki komut satırını çalıştırmak yeterlidir.
    - ./codeceptjs run-multiple --config=./../../codecept.json --all --steps

Proje config dosyası “codecept.json” dosyasıdır. Test firefox da çalışacak şekilde config ayarı yapılmıştır. Config dosyasından değiştirilebilir. 
Test i multiple olarak çalıştırmak için gerekli config ayarları mevcuttur. Test multiple olarak çalıştırıldığında;
- Test1 => firefox
- Test2 => chrome
- Test3 => firefox da çalışcak şekilde ayarlanmıştır.
