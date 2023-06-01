// import { Promise } from "cypress/types/bluebird"

export class genericFunctions{

  fnVerifyAndCloseAlert(sType:string, sVal:string){
    cy.on('window:alert', (str) => {  
        cy.fnUpdateJsonFile("GlobalVariable", sType, str)
        expect(str).to.contain(sVal)
    })
  }

  
}