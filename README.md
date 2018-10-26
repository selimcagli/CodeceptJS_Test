# CodeceptJS Test

Before test, Node.js and Java must be installed on computer. (To perform tests, Chrome and Firefox must be installed. Browser can be changed by changing codecept.json file)

Tests can be perform in 2 way
1. By shell script
    - In Order:
        - SetupSelenumAndStart.sh
        - SetupAndRunTests.sh
    - If you want to run the test again after installation, running the following shellscript is enough
        - RunTests.sh
        
2. Applying the following methods in order.

After downloading the project, you can perform the Project1 test by following the steps below. (Project can be download by command line  => git clone https://github.com/selimcagli/CodeceptJS_Test.git)

-	First of all, To run tests, “selenium-standalone” must be downloaded and setup. To download “selenium-standalone”, Commands must be run on command line on root directory of project:
    - npm install selenium-standalone@latest
    - selenium-standalone install
    - selenium-standalone start

-	After you need to download CodeceptJS@1.1.1 by npm. To download “CodeceptJS”: Commands must be run on command line on root directory of project:
    - npm install codeceptjs@1.1.1

-	The command below must be run on /node_modules/.bin/ directory. 
    - ./codeceptjs run --config=./../../codecept.json --steps

-	It is enough to run the following command line to run the tests in the project in parallel.
    - ./codeceptjs run-multiple --config=./../../codecept.json --all --steps

Project config file is “codecept.json”. The config has been set to work in test for firefox Test. It can be changed from config file. 
Config settings are available to run the test multiple times. When the test is run multiple times, The tests will be run in the following order
- Test1 => firefox
- Test2 => chrome
- Test3 => firefox
