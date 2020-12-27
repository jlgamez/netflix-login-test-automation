const navElements = {
    tvShowsTab: () => cy.findByRole('link', { name: /tv shows/i }, { timeout: 10000 }),
    moviesTab: () => cy.findByRole('link', { name: /movies/i }, { timeout: 10000 }),
    searchButton: () => cy.findByRole('button', { name: /search/i }),
    searchBar: () => cy.get('input[name="searchInput"]'),
    accountMenu: () => cy.get('.account-menu-item', { timeout: 10000 }),
    accountDropDown: () => cy.get('.account-drop-down'),
};

const mainCover = {
    titleLogo: () => cy.get('.title-logo'),
    synopsis: () => cy.get('.no-supplemental'),
    playButton: () => cy.findByRole('link', { name: /play/i }),
    moreInfoButton: () => cy.findByRole('button', { name: /more info/i }),
    movieCard: () => cy.find('.title-card'),
}

export const homePage = {
    tvShowsTab(){return navElements.tvShowsTab();},
    moviesTab(){return navElements.moviesTab();},
    clickOnSearch(){navElements.searchButton().click();},
    searchBar(){return navElements.searchBar();},
    clickOnAccountMenu(){navElements.accountMenu().click();},
    accountDropDown(){return navElements.accountDropDown();},
    titleLogoIsDisplayed(){mainCover.titleLogo().should('be.visible');},
    synopsisIsDisplayed(){mainCover.synopsis().should('be.visible');},
    playCoverContent(){mainCover.playButton().click()},
    clickOnMoreInfo(){mainCover.moreInfoButton().click();},
    numberOfCardsLoadedEqualsTo(num){mainCover.movieCard().should('have.lenght', num);},
};
