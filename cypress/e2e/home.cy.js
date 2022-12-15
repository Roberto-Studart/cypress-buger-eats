Cypress.config('defaultComandTimeout', 5000)
import sigunp from '../pages/signupPage'

describe('Home', ()=>{
    it('First view', function (){
        cy.viewport(1440, 900)
        cy.visit('/')
    })
})