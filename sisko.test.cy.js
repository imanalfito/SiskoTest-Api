describe('Login Test', () => {
    it('It should load to homepage', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
    });
    it('It should to login with valid data', () => {
        cy.get(':nth-child(2) > a > #login').click()
        cy.get(':nth-child(1) > .form-control').type('imanfitratul@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('Bismillah11#')
        cy.get('#login > .btn').click()
        cy.get('.navbar-avatar').click()
        cy.url().should('include','/member')
        cy.get('.waves-effect.waves-classic').should('be.visible','/login')
    });
    it('It should to login with email correct & password wrong', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
        cy.get(':nth-child(2) > a > #login').click()
        cy.get(':nth-child(1) > .form-control').type('imanfitratul@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('Bismillah')
        cy.get('#login > .btn').click()
    });
    it('It should to login with email wrong & password correct', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
        cy.get(':nth-child(2) > a > #login').click()
        cy.get(':nth-child(1) > .form-control').type('imanfitratul@gmail')
        cy.get(':nth-child(2) > .form-control').type('Bismillah11@')
        cy.get('#login > .btn').click()
    });
    it('It should to login with email wrong & password wrong', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
        cy.get(':nth-child(2) > a > #login').click()
        cy.get(':nth-child(1) > .form-control').type('imanfitratul@gmai')
        cy.get(':nth-child(2) > .form-control').type('Bismillah')
        cy.get('#login > .btn').click()
    }); 
    it('It should to forget password with email registared', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
        cy.get(':nth-child(2) > a > #login').click()
        cy.get('[href="https://sistemtoko.com/forgot"]').click()
        cy.get('.form-control').type('imanfitratul@gmail.com')
        cy.get(':nth-child(3) > .btn').click()
    });
    it('It should to forget password with email dont registared', () => {
        cy.visit('https://sistemtoko.com/')
        cy.url().should('eq', 'https://sistemtoko.com/')
        cy.get(':nth-child(2) > a > #login').click()
        cy.get('[href="https://sistemtoko.com/forgot"]').click()
        cy.get('.form-control').type('fitratuliman@gmail.com')
        cy.get(':nth-child(3) > .btn').click()
    });
})
