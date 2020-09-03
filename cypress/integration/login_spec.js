describe('User Login', () => {
    it('should login with valid email', () => {
        cy.visit('/site/login')
        // This page includes two login forms, so we have to pick one to fill out
        // The visible form is actually the second form - the first being the modal one
        cy.get('form[action="/user/login"]').eq(1).within(() => {
            cy.get('input[name="User[email]"]').type('admin@graphite.com');
            cy.get('input[name="User[password]"]').type('SpareHire123!');
            cy.get('input[type=submit]').click();
        });
        
        cy.url().should('include', 'admin/panel');
    })
})