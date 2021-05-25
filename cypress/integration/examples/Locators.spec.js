/// <reference types="cypress" />
describe('Locating Elements', function() {
    it ('Verify types of locators', function() {
        cy.viewport(1920, 1080)
        cy.visit("https://demo.nopcommerce.com/") // Opens the url for
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("[type='submit']").click()
        cy.scrollTo("bottom")
        cy.get(".product-box-add-to-cart-button").click()
        cy.get("#product_enteredQuantity_4").clear().type('2')
        cy.scrollTo("top")
        cy.get("#add-to-cart-button-4").click()
        cy.wait(5000) // 5 seconds
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(3000) // 3 seconds
        cy.get(".product-unit-price").contains("$1,800.00")
    })
})