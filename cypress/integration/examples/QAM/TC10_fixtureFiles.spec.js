// describe('Login', function() {
//     it('Sign in', function() {
//         cy.visit('https://react-redux.realworld.io/#/login')
//         cy.fixture('userLoginDetails').then((user) => {
//             cy.get('input[type="email"]').type(user.email)
//             cy.get('input[type="password"]').type(user.password)
//         })
        
//         cy.get('.btn').contains('Sign in').should('be.visible').click()
//     })
// })

describe('Login', function() {
    this.beforeEach(function() {
        cy.fixture('userLoginDetails').as('user')
    })
    it('Sign in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.fixture('userLoginDetails').then((user) => {
            cy.get('input[type="email"]').type(this.user.email)
            cy.get('input[type="password"]').type(this.user.password)
        })
        
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})