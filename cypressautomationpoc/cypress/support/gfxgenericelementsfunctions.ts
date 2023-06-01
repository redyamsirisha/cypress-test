/*Created By -> Kenal
  Created Date -> 09-09-2022
  Modified Date -> 19-10-2022
*/

/// <reference types="cypress"/> 
/// <reference types="cypress-xpath"/>

export class gfxgenericelementsfunctions{

//page elements
readonly elements ={
  //Customer ID/Sec ID page elements - Start
  // lblUserID : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='S0USID']"),
  txtSecAccCountryCode : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='s1ctcd']", { timeout: 90000 }),   //Max Len 2
  txtSecAccCountryBankCode : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='s1gmab']"),   //Max Len 4
  txtSecAccGrpMember1 : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='s1acb']"),   //Max Len 3
  txtSecAccGrpMember2 : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='s1acs']"),   //Max Len 6
  txtSecAccGrpMember3 : () => cy.getIframeBody().xpath("//input[@ng-reflect-name='s1acx']"),  //Max Len 3
  //Customer ID/Sec ID page elements - End
  }

  // fnVerifyAndCloseAlert(sType:string, sVal:string){
  //   cy.on('window:alert', (str) => {  
  //       cy.fnUpdateJsonFile(sType, str)
  //       expect(str).to.contain(sVal)
  //   })
  // }
  
}