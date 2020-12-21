export const basePage = {

    goToLoginPage(){cy.visit('https://www.netflix.com/es/login')},
    shouldHaveUrl(url){ cy.url().should('contain', url)},
    pageTitle(){cy.title()}
    
}