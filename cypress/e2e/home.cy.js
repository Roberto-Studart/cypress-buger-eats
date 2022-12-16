Cypress.config('defaultComandTimeout', 5000)
import sigunp from '../pages/signupPage'

describe('Home', ()=>{
    it('First view', function (){
        cy.visit('/')
    })
})