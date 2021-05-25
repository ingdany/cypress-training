describe("Create and mark-unmark as favorite", function () {

    Cypress.config('pageLoadTimeout', 10000)

    before(function () {
        cy.SignIn()
    });

    it.only("Create a post", function () {
        //cy.contains("New Post").click();
        cy.get('ul.navbar-nav').children().as('menu')
        cy.get('@menu').contains('New Post').click()
        //cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should("include", "#/editor");
        cy.get('form').within(($form) => {
            cy.get('input').first().type("Test");
            cy.get('input').eq(1).type("Test 1");
            cy.get('textarea').last().type("Test 2");            
            cy.contains("Publish Article").click();
        })        
        cy.url().should("include", "article");
    });

    it.skip("Mark-unmark as favorite", function () {
        //cy.get(".nav-link").contains("dperez").click();
        cy.get("ul.navbar-nav").children().contains("dperez").click();
        cy.contains("My Articles").should("be.visible");
        cy.get(".ion-heart").first().click();
        cy.contains("Favorited Articles").click();
        cy.url().should("include", "favorites");        
        cy.get('.btn-primary').first().then(($fav) => {
            return $fav.text()
            //const favCount = $fav.text()
            //expect(parseInt(favCount)).to.eq(1)
        }).as('favCount')
        cy.get('@favCount').then(($cnt) => {
            expect(parseInt($cnt)).to.eq(1)
        })
        cy.get('.btn-primary').first().click()
    });
});
