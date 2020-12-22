import { basePage } from "../common/base.page";
import { loginPage } from "./login-pom/login.page";

describe('Attempt to login without credentials', function(){

    before(function(){
        basePage.goToLoginPage();
    });
    
    it('Should have title Netflix', function(){

        basePage.pageTitleMAtch('Netflix');
    });

    it('Login with no credentials should display 2 error messages', function(){
    
            loginPage.clickLogIn();
    
            loginPage.noUserText().should('be.visible');
            loginPage.noPasswordText().should('be.visible');
    
        });

});