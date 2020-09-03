describe('Visit home pages', () => {
    it('should open home', () => {
        cy.visit('/')
        cy.contains('graphite')
    })
})