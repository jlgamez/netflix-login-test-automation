import {basePage} from '../common/base.page.js';
import {perform} from '../common/base.page.js';
import {search} from './search.page.js';

describe('Search for content', function(){

    before('Login', function(){
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

    it('Should render the most relevant result as first for a valid search', function(){
        const searchTerm = 'The Witcher';
        search.clickOnSearch();
        search.searchFor(searchTerm);

        search.firstResultShouldContain(searchTerm);
    });

    it('Should display "No results" message with the search term for an invalid search', function(){
        const invalidSearchTerm = 'theresNoWayYouFindThis';
        search.clickOnSearch();
        search.searchFor(invalidSearchTerm);

        search.noResultsMessageShouldContain(invalidSearchTerm);
    });

    it('Should render an irrelevant result for a search with no content in netflix', function(){
        const searchTerm = 'Game of Thrones';
        search.clickOnSearch();
        search.searchFor(searchTerm);

        search.firstResultShouldContain("^((?!" + searchStr + ").)*$");
    });
});