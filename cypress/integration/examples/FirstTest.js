describe('MyTestSuite', function() {
    it('Verify Title Of The Page', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
    it('Verify Title Of The Page - Negative', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
    })
})