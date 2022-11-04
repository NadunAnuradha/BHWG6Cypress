/// <reference types="cypress" />
require('cypress-xpath')
class LoginPage{

    elements ={        
        usernameInput : () => cy.get('input[name="username"]'),        
        passwordInput : () => cy.get('input[name="password"]'),       
        btnLogin : () => cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/form/div[5]/button'),   
                
    }
        
    typeUsername(username){        
        this.elements.usernameInput().type(username)        
    }
    typePassword(password){        
        this.elements.passwordInput().type(password)        
    }
    ClickSave(){        
        this.elements.btnLogin().click();      
    }
    
}        
    module.exports = new LoginPage();