import Login from '../pageObjects/Login'

describe('Login', function() {
    const login = new Login()
    it('Sign in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('dperez@gmail.com')
        login.password().type('12345678')
        login.signInButton().should('be.visible').click()
    })
})
