const elements = {
    netflixLogo: () => cy.findByRole('link', { name: /netflix/i }),
    signUpLink: () => cy.findByRole('link', { name: /sign up now/i }),
    needHelpLink: () => cy.findByText(/need help?/i),
    userInput: () => cy.findByRole('textbox', { name: /email or phone number/i }),
    passwordInput: () => cy.findByLabelText(/password/i),
    loginButton: () => cy.findByRole('button', { name: /sign in/i }),
    noUserMessage: () => cy.findByText(/please enter a valid email or phone number./i),
    noPasswordMessage: () => cy.findByText(/your password must contain between 4 and 60 characters./i),
    wrongUserMessage: () => cy.get('div div.ui-message-contents'),
    wrongPasswordMessage: () => cy.findByText(/please try again or you can/i),
};

export const loginPage = {
    clickOnLogo(){elements.netflixLogo().click();},
    clickOnSignUpLink(){elements.signUpLink().click()},
    clickOnNeedHelpLink(){elements.needHelpLink().click()},
    clickLogIn(){elements.loginButton().click();},
    typeUser(user){elements.userInput().type(user, {force: true});},
    typePassword(password){elements.passwordInput().type(password)},
    noUserMessage(){return elements.noUserMessage();},
    noPasswordMessage(){return elements.noPasswordMessage();},
    wrongUserMessage(){return elements.wrongUserMessage();},
    wrongPasswordMessage(){return elements.wrongPasswordMessage();}
};
