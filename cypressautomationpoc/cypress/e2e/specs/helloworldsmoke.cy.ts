/*Created By -> Rishabh
  Created Date -> 18-04-2023
*/

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
/// <reference types="cypress-grep" />

//Importing FxSi and login related class files 
import {HelloPage} from '../../pages/hellowworld.po'


//Importing Data files
import testdata from "../../fixtures/hellowworld.json"

//test data loop
describe('Hello World Test Automation Suite - Smoke Test1 Validation', {tags: 'smoke'}, ()=> {

    //Instantiating objects after imported class of login and Fx Standing Instructions
    const objHelloPage = new HelloPage()


    testdata.forEach(test=> {
    
      beforeEach(()=> {
        objHelloPage.fnGFXLogin(test)
        
      })

    
      it(test.Scenario + ":TC[01] - Validate First Smoke Test", ()=> {
        objHelloPage.fnverifyfirsttest(test)
        
      
      })
        
      it(test.Scenario + ":TC[02] - Validate Second Smoke Test", ()=> {
        objHelloPage.fnverifysecondtest(test)
        
      
      })

      it(test.Scenario + ":TC[03] - Validate Third Smoke Test", ()=> {
        objHelloPage.fnverifythirdtest(test)
        
      
      })



      afterEach(function() {
        if (this.currentTest?.state === 'passed') {
          cy.screenshot()
      }
        objHelloPage.fnGFXLogout()
      })  
    })    
})