describe('Visit home pages', () => {
    it('should open home', () => {
        cy.visit('/')
        cy.contains('On-demand business expertise at your fingertips')
    })
})