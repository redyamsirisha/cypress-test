/// <reference types="cypress" />
/// <reference path="../support/e2e.ts" />

import '@testing-library/cypress/add-commands'
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('getIframeBody', () => {
    cy.log('getIframeBody')
  
    return cy
    .get('#iframe', { timeout: 90000 })
    .its('0.contentDocument.body', { log: false }).should('not.be.empty')
    .then((body) => cy.wrap(body, { log: false }))
  })

Cypress.Commands.add('fnUpdateJsonFile', (jsonFileName: string, sKey: string, sVal: string)=>{
    let str:string = sKey.toString()
    cy.log(str)
    cy.log(sKey)
    cy.readFile("cypress/fixtures/"+ jsonFileName + ".json").then((data) => {
      data[0][sKey]= sVal //.toString()
      cy.writeFile("cypress/fixtures/"+ jsonFileName + ".json", data) //JSON.stringify(data, null, 2))
      cy.log(data[0][sKey])
  })
  })

  Cypress.Commands.add("fnCompareActualExpectedValues", (locator, strExpectedRes) => {
    const normalizeText = (s:any) => s.replace(/\s/g, '').toLowerCase()
    let strExpected = normalizeText(strExpectedRes)
    locator().should('be.visible').invoke("val").should(($identifier) => {
      let strActual =  normalizeText($identifier)
      expect(strActual).to.equal(strExpected) 
    })
  })

    Cypress.Commands.add("fnValidateElementArray", (locator, strExpectedRes) => {
      const normalizeText = (s:any) => s.replace(/\s/g, '').toLowerCase()
      locator().then(els => {
        [...els].forEach(el => 
          cy.wrap(el).invoke("val").then(($txt) => {
            let strActual = normalizeText($txt)
            let strExpected = normalizeText(strExpectedRes)
            if(strExpected == strActual){
              expect(strActual).to.equal(strExpected)
              return true
            } 
          }))
      })
    })
        