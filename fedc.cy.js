describe('DuniaCoding Website', () => {
    it('Should load the homepage', () => {
      cy.visit('http://duniacoding.id/')
      cy.url()
      // Melakukan pengujian terhadap tampilan dan konten di halaman beranda
      cy.get(':nth-child(1) > .nav-link')
    });
  
    it('Should navigate to the "Courses" page', () => {
      // Mengklik tautan menu "Courses" dan memastikan halaman terbuka dengan benar
      cy.get(':nth-child(3) > .nav-link').click().should('be.visible')
    });
  
    it('Should search for a course', () => {
      // Memasukkan kata kunci pencarian dan memeriksa hasil pencarian
      cy.get('.search-bar-style').click()
      cy.get('.search-bar-style').type('JavaScript')
      cy.get('form.d-flex > .btn').click()
    });
    it('Login succesfully', () => {
     // Melakukan Login
        cy.visit('http://duniacoding.id/')
        cy.get('.navbar-nav > .d-flex > .btn').click()
        cy.url().should('include','/login')
    });
    it('Should try to login with valid data', () => {
     // Melakukan login dengan email dan paswword yang benar
        cy.get('#floatingInput').clear()
        cy.get('#floatingInput').type('fitratuliman28@gmail.com')
        cy.get('#floatingPassword').clear()
        cy.get('#floatingPassword').type('Bismillah2811')
        cy.get('#remember-me').click()
        cy.get('.btn').click()
    });
    it('Should navigate to event', () => {
     // Mengklik tautan event dan memastikan diarahkan dihalaman tersebut
        cy.get('.navbar-nav > :nth-child(2) > .nav-link').click().should('be.visible')
    });
  })
