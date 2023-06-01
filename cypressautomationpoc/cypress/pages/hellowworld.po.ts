/*Created By -> Kenal
  Created Date -> 09-09-2022
  Modified Date -> 19-10-2022
*/

/// <reference types="cypress"/> 
/// <reference types="cypress-xpath"/>

import { sample } from "cypress/types/lodash"

export class HelloPage{

    strUserName: any

    readonly elements ={
        // txtUserName : () => cy.get("input[placeholder='Username']"),
        // txtPassword : () => cy.get("input[placeholder='Password']"),
        // btnLogin : () => cy.get("button[placeholder='Sign In']"),
        // btnProfile: () => cy.get(".ev-dropdown > .ev-button"),
        // btnLogout:() => cy.get('#dropdownModal > .ev-list > :nth-child(2) > .ev-list__item'),
        //Home Service Hub Link
        txtfirst: () => cy.xpath("/html/body/app-root/div[1]"),
        txtSecond: () => cy.xpath("/html/body/app-root/div[2]"),
        txtthird: () => cy.xpath("/html/body/app-root/div[3]"),
    }

    fnLaunchURL(){
        // const sURL:string = Cypress.env('baseUrl')
        cy
            .clearCookies()
            .visit('/')
            return this
    }

    fnverifyfirsttest(test:any){
        this.elements.txtfirst().should('contain.text',test.first)
    }

    fnverifysecondtest(test:any){
        this.elements.txtSecond().should('contain.text',test.second)
    }

    fnverifythirdtest(test:any){
        this.elements.txtthird().should('contain.text',test.third)
    }

    fnGFXLogin(test:any){
        this.fnLaunchURL()
        // this.elements.txtUserName().should('be.visible').clear().type(test.G4Username).should('have.value', test.G4Username)
        // this.elements.txtPassword().clear().type(test.G4Password, {log: false})//.should('have.value', test.G4Password, {log: false})
        // cy.screenshot()
        // this.elements.btnLogin().click()
        // this.elements.btnProfile().should('be.visible')
        // this.elements.lnkServiceHub().should('be.visible')
    }

    fnGFXLogout(){
        //this.elements.btnProfile().click()
       // this.elements.btnLogout().click()//
        // this.elements.txtUserName().should('be.visible')
        cy.screenshot()

    }

    
    
    
}