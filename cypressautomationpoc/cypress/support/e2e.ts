// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

require('cypress-xpath');

require('cypress-grep')();

// beforeEach(function() {
//   let testSuite = Cypress.env('SUITE');
//   cy.log(testSuite)
//   if (!testSuite) {
//     return;
//   }
  
//   const testName = (Cypress as any).mocha.getRunner().test.fullTitle();
//   cy.log(testName)
//   testSuite = "<"+testSuite+">"
//   if (!testName.includes(testSuite)) {
//     this.skip();
//   }
// })

// Alternatively you can use CommonJS syntax:
// require('./commands')

//// <reference types="cypress" />

Cypress.Screenshot.defaults({
  capture: 'viewport',
  // scale: false,
});


  declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        fnUpdateJsonFile(jsonFileName: string, sType: string, sVal: string): Chainable<any>
        getIframeBody(): Chainable<any>
        fnCompareActualExpectedValues(locator, strExpectedRes): Chainable<any>
        fnValidateElementArray(locator, strExpectedRes): Chainable<any>
      }
    }
  }
  