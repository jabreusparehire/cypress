describe('User Login', () => {
    it('should login with valid email', () => {
        cy.visit('/login')
        cy.get('input[type=email]').type('admin@graphite.com')
        cy.get('input[type=password]').type('SpareHire123!')
        cy.get('div.button').first().click()
        cy.url().should('include', 'admin/panel')
    })
})