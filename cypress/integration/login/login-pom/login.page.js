const elements = {
    userInput: () => cy.getByRole('textbox', { name: /email or phone number/i }),
    passwordInput: () => cy.getByLabelText(/password/i),
    loginButton: () => cy.getByRole('button', { name: /sign in/i })
}
