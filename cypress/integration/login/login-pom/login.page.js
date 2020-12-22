const elements = {
    userInput: () => cy.findByRole('textbox', { name: /email or phone number/i }),
    passwordInput: () => cy.findByLabelText(/password/i),
    loginButton: () => cy.findByRole('button', { name: /sign in/i }),
    noUserErrorMessage: () => cy.findByText(/please enter a valid email or phone number./i),
    noPasswordErrorMessage: () => cy.findByText(/your password must contain between 4 and 60 characters./i)
};

export const loginPage = {
    clickLogIn(){elements.loginButton().click();},
    noUserText(){return elements.noUserErrorMessage();},
    noPasswordText(){return elements.noPasswordErrorMessage();}
}
