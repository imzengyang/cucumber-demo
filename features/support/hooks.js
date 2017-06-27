'use strict';

module.exports = function Hooks() {
  var driver = require('../support/world').driver;
  // Before All Features
  this.BeforeFeatures(function (event, callback) {
    driver.manage().window().maximize();
    callback();
  })
  // Before Feature
  this.BeforeFeature(function (event, callback) {

    callback();
  });
  //Before Scenario 
  this.BeforeScenario(function (event, callback) {

    callback();
  });
  // Before Step
  this.BeforeStep(function (event, callback) {

    callback();
  });
  // After Step
  this.AfterStep(function (event, callback) {

    callback();
  });

  this.After(function (scenario) {
   return driver.takeScreenshot().then(function (screenShot) {
     
      scenario.attach(new Buffer(screenShot, 'base64'), 'image/png');
    });
    
  });
  // After Scenario
  this.AfterScenario(function (event, callback) {

    callback();
  })
  // After Feature
  this.AfterFeature(function (event, callback) {

    callback();
  })
  // After All Features
  this.AfterFeatures(function (event) {
    return driver.quit();

  })

};






  // this.Before(function(scenario){
  //   // console.log("Before do scenario.......")
  //   return this.driver.manage().window().maximize();
  // });
  // this.After(function(scenario) {
  //   // console.log("After do scenario......",scenario);
  //   this.driver.takeScreenshot().then(function (data) {
  //     var decodedImage = new Buffer(data, 'base64').toString('binary');
  //     scenario.attach(decodedImage, 'image/png');
  //     console.log("after scenario....");
  //   });
  //   this.driver.manage().deleteAllCookies();

  // });
  // this.registerHandler('AfterFeatures', function (event) {
  //   console.log("AfterFeatures......")
  //   return driver.quit();
  // });