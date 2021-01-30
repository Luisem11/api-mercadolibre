describe('MercadoLibre search', () => {
  it('Gets Iphones', () => {
    cy.visit('');
    cy.get('[type="search"]').type('iPhone {enter}');
    cy.contains('iPhone');
    cy.get('a btn btn-dark').click();

    cy.url().should('include', '/MCO');

  })
})
