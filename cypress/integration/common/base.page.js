export const basePage = {

    goToLoginPage(){cy.visit('https://www.netflix.com/es-en/login')},
    shouldHaveInUrl(str){ cy.url().should('contain', str)},
    shouldNotHaveInUrl(str){cy.url().should('not.contain', str)},
    pageTitleMAtch(title){cy.title().should('eq', title)},
    refresh(){cy.reload()},
    killCookies(){cy.clearCookies()}
    
}