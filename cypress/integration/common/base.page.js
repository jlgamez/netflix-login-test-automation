export const basePage = {

    goToLoginPage(){cy.visit('https://www.netflix.com/es-en/login')},
    shouldHaveUrl(url){ cy.url().should('contain', url)},
    pageTitleMAtch(title){cy.title().should('eq', title)}
    
}