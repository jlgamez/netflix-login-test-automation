export const basePage = {
    goToLoginPage(){cy.visit('https://www.netflix.com/es-en/login')},
    goToHomePage(){cy.visit('https://www.netflix.com/browse/')},
    shouldHaveInUrl(str){ cy.url().should('contain', str)},
    shouldNotHaveInUrl(str){cy.url().should('not.contain', str)},
    pageTitleMAtch(title){cy.title().should('eq', title)},
    refresh(){cy.reload()},
    killCookies(){cy.clearCookies()},
};

export const perform = {
    login(user, password){
        basePage.goToLoginPage();
        cy.findByRole('textbox', { name: /email or phone number/i }).type(user, {force:true});
        cy.findByLabelText(/password/i).type(password, {force:true});
        cy.findByRole('button', { name: /sign in/i }).click();
        cy.get('div[data-profile-guid="VVCRB7NARJDMVCTBZ74P3GGWMM"]').click();
    }
}

