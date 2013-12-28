# A Lineman JS Template using Angular


This is a project template for Angular JS applications using [Lineman](http://www.linemanjs.com).

Features

Added Boostrap/Jquery 1.9.1/D3/NvD3/Lodash


# Instructions

1. `git clone https://github.com/senthilpk/linemanjs-angularjs-template.git my-lineman-app`
2. `cd my-lineman-app`
3. `sudo npm install -g lineman`
4. `npm install`
5. `lineman run`
6. open your web browser to localhost:8000

# Running Tests


To run the unit tests:

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

To run the end-to-end tests:

1. `npm install protractor`
2. `brew install selenium-server-standalone`
3. Make sure you have chrome installed.
4. `lineman run` from 1 terminal window
5. `lineman grunt spec-e2e` from another terminal window

  Troubleshooting:

    If you see this error: Warning: there's no selenium server jar at the specified location,
    you may need to change the selenium-server-standalone jar version in config/spec-e2e.js
    to the actual you see in /user/local/opt/selenium-server-standalone.

    If you see this error: Fatal error: The path to the driver executable must be set by the
    webdriver.chrome.driver system property, you may need to download the chromedriver
    (https://code.google.com/p/selenium/wiki/ChromeDriver) and place it in /usr/local/bin (mac).

# Defining your apps angular.module in CoffeeScript

If you are using Coffeescript to define the angular.module for your app, you will need to swap the concat order in `config/application.js` such that coffeescript files are included _before_ javascript, here's a sample config. (If you are using JavaScript for defining the angular.module the default concat order is fine).

Replace `config/application.js` with the following if you want to define your app module in coffeescript:

```javascript
/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {
  concat_sourcemap: {
    js: {
      src: [
        "<%= files.js.vendor %>",
        "<%= files.coffee.generated %>",
        "<%= files.js.app %>",
        "<%= files.ngtemplates.dest %>"
      ]
    }
  }
});
```

Hopefully this helps you get up and running with AngularJS!
