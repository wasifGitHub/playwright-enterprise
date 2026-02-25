///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// GIT repository Steps
/*
1. create repository on GitHub
2. git init
3. create .gitignore file and add node_modules/
/test-results/
/playwright-report/
/plawright/.cache/ to it
4. git remote add origin https://github.com/wasifGitHub/playwright-enterprise.git
git branch -M main
5. git add .
6. git commit -m "Initial commit"
7. git remote set-url origin git@github.com:wasifGitHub/playwright-enterprise.git
8. git push 
9. git push --set-upstream origin main

10. for cloning the repository: git clone "git share url"
*/


/*
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// process.env variables
1. process.env.BASE_URL = "https://www.saucedemo.com/"
2. process.env.USERNAME = "standard_user"
3. process.env.PASSWORD = "secret_sauce"

    - It helps in keeping the sensitive data like username and password secure and not hardcoding them in the code. We can access these variables in our test files using process.env.VARIABLE_NAME.
    - It help to manage multiple environments ( qa, uat.st,sit) without repeating tests. we use dotenv and NODE_ENV to implement this.
    - When testing, we can set these environment variables in our terminal or command prompt before running the tests, or we can use a .env file to store them and load them using a package like dotenv. This way, we can easily manage different configurations for different environments (e.g., development, staging, production) without changing the code.
    - Read environment variables from file in playwright.config.ts
    https://github.com/motdotla/dotenv
    // require('dotenv').config();
    // npm install dotenv --save

// NODE_ENV : 
    - Its a system variable . when we set the NODE_ENV from the run time or terminal we can just see these inside our code and based on the value we can pick up the different .env files.

    - We have all the configuration , specially environment specific configuration under the config folder and we have different .env files for different environment like .env.qa, .env.uat, .env.st etc. and based on the value of NODE_ENV we can pick up the different .env files and load the environment variables from that file.
    - echo %NODE_ENV% | for mac - echo $NODE_ENV : run this comand in terminal and if it returns same value then NODE_ENV is not set otherwise it will return the value of NODE_ENV
    " - set NODE_ENV=qa " is for window and for mac- " export NODE_ENV=qa " : this command will set the value of NODE_ENV to qa and then we can access it in our code using process.env.NODE_ENV
    - set NODE_ENV=uat : this command will set the value of NODE_ENV to uat and then we can access it in our code using process.env.NODE_ENV
    - unset NODE_ENV : this command will unset the value of NODE_ENV and then when we try to access it in our code using process.env.NODE_ENV it will return undefined
*/

/*//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
1. Constructor:
    - The constructor initializes dependencies like the Playwright Page object, while page actions such as navigation and login are implemented as separate methods to keep control and reusability.

    - A constructor is a special method in a class that is automatically called when an instance of the class is created. It is used to initialize the properties of the class and set up any necessary configurations. In TypeScript, a constructor can take parameters that are used to initialize the class properties.

2. how this line is working from playwright.config.ts file ? 
    await this.page.goto("/");

    This line works because of 3 things combined:
    - Playwright gives you a page
    - You pass that page into your Page Object via the constructor
    - Playwright knows the baseURL from playwright.config.ts

*/

/*//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// CryptoJS:
    - CryptoJS is a JavaScript library that provides various cryptographic algorithms for encryption and decryption. It allows you to securely encrypt sensitive data, such as passwords, before storing them or transmitting them over the network. 
    - In the context of Playwright tests, you can use CryptoJS to encrypt sensitive information like usernames and passwords before using them in your tests, ensuring that they are not exposed in plain text.
    - npm install crypto-js
    - npm install --save-dev @types/crypto-js
    
    - import CryptoJS from "crypto-js";
    - const encryptedUsername = CryptoJS.AES.encrypt(username, secretKey).toString();
    - const decryptedUsername = CryptoJS.AES.decrypt(encryptedUsername, secretKey).toString(CryptoJS.enc.Utf8);

*/

/*//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// logging with Winston:
    - Winston is a popular logging library for Node.js that provides a simple and flexible way to log messages in your applications. It supports multiple transports (e.g., console, file, HTTP) and allows you to customize the log format and level.
    - In the context of Playwright tests, you can use Winston to log important information during test execution, such as test steps, errors, and other relevant details. This can help you debug issues and keep track of test execution flow.
    - npm i winston
    - npm i --save-dev @types/winston (optional)
    // for current timezone:
    - npm i moment-timezone
    
    - import winston from "winston";
    - const logger = winston.createLogger({
        level: "info",
        format: winston.format.json(),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "combined.log" }),
        ],
    });
    
    - logger.info("This is an informational message");
    - logger.error("This is an error message");

*/
