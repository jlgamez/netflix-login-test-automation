import { basePage } from "../common/base.page";
import { loginPage } from "./login.page.js";

describe('Miscelaneous', function(){
    beforeEach(function(){
        basePage.killCookies();
        basePage.goToLoginPage();
     });
    
    it('Should have title Netflix', function(){
        basePage.pageTitleMAtch('Netflix');
    });

    it('Should redirect to main page after clicking on the logo', function(){
        loginPage.clickOnLogo()

        basePage.shouldNotHaveInUrl('login');
    });

    it('Should redirect to main page after clicking on sign up link', function(){
        loginPage.clickOnSignUpLink();

        basePage.shouldNotHaveInUrl('login');
    });

    it('Should redirect to Login Help page after clicking on need help link', function(){
        loginPage.clickOnNeedHelpLink();

        basePage.shouldHaveInUrl('LoginHelp');
    });
});

describe('Login to Netflix', function(){

    let credentials;
        
    before(function(){
        // the path in fixture function defaults to cypress/fixtures
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
        }); 
    });

    beforeEach(function(){
        basePage.killCookies();
        basePage.goToLoginPage();
     });

    it('Should login to Netflix with valid credentials', function(){
        loginPage.typeUser(credentials.user);
        loginPage.typePassword(credentials.password);
        loginPage.clickLogIn();

        basePage.shouldHaveInUrl('browse');
    });

    it('Should display 2 error messages after login with no credentials ', function(){
        loginPage.clickLogIn();
    
        loginPage.noUserMessage().should('be.visible');
        loginPage.noPasswordMessage().should('be.visible');
        });

    it('Should display 1 password error message after login without password ', function(){
        loginPage.typeUser('fake@user.com');
        loginPage.clickLogIn();

        loginPage.noPasswordMessage().should('be.visible');
    });

    it('Should display 1 user error message after login without user', function(){
        basePage.refresh();
        loginPage.typePassword('anyp4ssw0rd');
        loginPage.clickLogIn();

        loginPage.noUserMessage().should('be.visible');
    });
    
    it('Should display an error message after login with invalid user ', function(){
        loginPage.typeUser('fake@user.com');
        loginPage.typePassword('anyp4ssw0rd');
        loginPage.clickLogIn();

        loginPage.wrongUserMessage().should('be.visible');
    });

    it('Should display an error message after login with invalid password ', function(){
        loginPage.typeUser(credentials.user);
        loginPage.typePassword('anyp4ssw0rd');
        loginPage.clickLogIn();

        loginPage.wrongPasswordMessage().should('be.visible');
    });
});

