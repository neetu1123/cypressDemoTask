describe('from clear', () => {
  it('all fields should be clear', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[data-email="email"]').type('neetu@example.com')
    cy.get('[data-name="name"]').type('neetu')
    cy.get('#Awsome').check()
    cy.get('[data-clear="clear"]').click()
    cy.get('[data-name="name"]').should('have.value', '')
    cy.get('[data-email="email"]').should('have.value', '')
  })
})

describe('empty form', () => {
  it('have an error msg', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[data-submit="submit"]').click()
    cy.get('[data-errorMsg="errorMsg"]').should('be.visible')
  })
})

describe('submit form', () => {
  it('have an succuss msg', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[data-email="email"]').type('neetu@example.com')
    cy.get('[data-name="name"]').type('neetu')
    cy.get('#Awsome').check()
    cy.get('[data-submit="submit"]').click()
    cy.get('[data-success="success"]').should('be.visible')

  })
})