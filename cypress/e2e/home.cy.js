Cypress.config('setCommandTimeOut', 5000)

describe('Checking the homepage', function(){
    it('First view', function(){
        cy.visit('/')
        cy.get('#page-home h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('#page-home p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
        cy.get('a[href="/deliver"]').should('be.visible')
        cy.get('header').should('be.visible')
    })
})