import signupPage from '../pages/signupPage';
import 'cypress-file-upload';


describe('Happy path motorcylce', function () {
    before(function () {
        cy.fixture('fullHappyPath').then((m) => {
            this.fullHappyPath = m
        })

    })
    it('Motorcycles great way test', function () {
        signupPage.go()
        signupPage.checkDesign()
        signupPage.fillForm(this.fullHappyPath.moto)
        signupPage.submit()
        
        var expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)

    })

})


describe('Happy path electric bike', function () {
    before(function () {
        cy.fixture('fullHappyPath').then((b) => {
            this.fullHappyPath = b
        })

    })
    it('electric bike great way test', function () {
        signupPage.go()
        signupPage.checkDesign()
        signupPage.fillForm(this.fullHappyPath.bike)
        signupPage.submit()

        var expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

})


describe('Happy path car and van', function () {
    before(function () {
        cy.fixture('fullHappyPath').then((c) => {
            this.fullHappyPath = c
        })

    })
    it('Car/Van great way test', function () {
        signupPage.go()
        signupPage.checkDesign()
        signupPage.fillForm(this.fullHappyPath.carro)
        signupPage.submit()
        
        var expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

})