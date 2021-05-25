describe('Create and mark-unmark as favorite', function() {
    it('Sign in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type="email"]').type('dperez@gmail.com')
        cy.get('input[type="password"]').type('12345678')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout: 10000}).should('be.visible')
    })

    it('Create a post', function () {
        cy.contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('input[placeholder="Article Title"').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark-unmark as favorite', function() {
        cy.get('.nav-link').contains('dperez').click()
        cy.contains('My Articles').should('be.visible')
        cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').click()
        //cy.reload()
        //cy.contains('No articles are here... yet.').should('be.visible')
        //cy.go('back')
    })
})