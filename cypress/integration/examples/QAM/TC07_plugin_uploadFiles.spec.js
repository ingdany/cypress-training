describe('Working with plugins', function() {
    it('File upload', function() {
        cy.visit("http://cgi-lib.berkeley.edu/ex/fup.html")

        const fileName = "test.pdf";
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').attachFile({ fileContent, fileName, mimeType: 'application/pdf'});
        })
        cy.get('[type="submit"]').click()
        cy.contains("You've uploaded a file. Your notes on the file were:")
    })    
})