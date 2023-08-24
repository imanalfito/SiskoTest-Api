describe('Api Sisko', () => {
    it('Display web info', () => {
        cy.request({
            method: 'GET',
            url: 'https://sistemtoko.com/public/demo/website',
        }).as('publik')
        cy.get('@publik').its('status').should('equal',200)
    });
    it('Validate header', () => {
        cy.request('https://sistemtoko.com/public/demo/product').as('demo')
        cy.get('@demo').its('headers').its('content-type').should('include','application/json')
    })
    it('Test API Single', () => {
        cy.request({
          method: 'GET',
          url: 'https://sistemtoko.com/public/demo/single/25138',
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.id).to.have.product('data');
          const data = response.body.data;
          expect(data).to.have.product('id').to.eq(25138);
            });
      });
      it('Tests API for Product Variants', () => {
        cy.request('GET', 'https://sistemtoko.com/public/demo/varian/25138')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            const variants = response.body.data;
            expect(variants).to.be.an('array');
          });
      });
        it('Tests API for Categories', () => {
          cy.request('GET', 'https://sistemtoko.com/public/demo/cat')
            .then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.have.property('data');
            });
        });
})