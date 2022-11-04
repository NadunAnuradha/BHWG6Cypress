/// <reference types="Cypress" />
import LoginPage from '../pages/LoginPage.cy'

describe('WG6 Home', function  () {

    beforeEach(()=>{
      cy.visit ('/') 
    })

  
    it('Verify WG6 Access', function () {     
      cy.title().should ('eq','Home | BergHansen')      
    })

    it('Verify successful Login ', function () {
     
      LoginPage.typeUsername("15157146")
      LoginPage.typePassword("Testteam001")
      LoginPage.ClickSave()
            
    })
  })