import {homePage} from './home.page.js';
import {basePage} from '../common/base.page.js'
import {perform} from '../common/base.page.js'

describe('Check nav elements', function(){
    before('login', function(){
        let credentials
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
            perform.login(credentials.user, credentials.password);
        });
        basePage.shouldHaveInUrl('browse');
    });

    it('Should display the Tv Shows tab', function(){
        homePage.tvShowsTab().should('be.visible');
    });

    it('Should display the Movies tab', function(){
        homePage.moviesTab().should('be.visible');
    });

    it('Should display the search bar after clicking on search button', function(){
        homePage.clickOnSearch();

        homePage.searchBar().should('be.visible');
    });

    it('Should display account drop downs after clicking on account icon', function(){
        homePage.clickOnAccountMenu();

        homePage.accountDropDown().should('be.visible');
    });

});

describe('Check Cover elements', function(){
    before('login', function(){
        let credentials
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
            perform.login(credentials.user, credentials.password);
        });
        basePage.shouldHaveInUrl('browse');
    });

    beforeEach('Got to Home page', function(){
        basePage.goToHomePage();
    });

    it('Should show the title logo in the main cover', function(){
        homePage.titleLogoIsDisplayed();
    });

    it('Should show the synopsis in the main cover', function(){
        homePage.synopsisIsDisplayed();
    });

    it('Should play the content in the main cover after hiting play', function(){
        homePage.playCoverContent();
        
        basePage.shouldHaveInUrl('watch');
    });

    it('Shoud display info about the content in the main cover', function(){
        homePage.clickOnMoreInfo();

        basePage.shouldHaveInUrl('?jbv');
    });

    it('Should 64 cards before scrolling', function(){
        homePage.numberOfCardsLoadedEqualsTo(64);
    });

});
