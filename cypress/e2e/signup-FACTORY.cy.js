Cypress.config('defaultComandTimeout', 7000)
import signupPage from '../pages/signupPage';
import 'cypress-file-upload';
import SignupFactory from '../factories/SignupFactory';


describe('Signup', () => {

    it('User must be deliver', function () {

        var deliver = SignupFactory.deliver()

        signupPage.go()
        signupPage.filForm(deliver)
        signupPage.submit()
        const expectedMesssage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMesssage)
    })


    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()
        deliver.CPF = '000111023i1'

        signupPage.go()
        signupPage.filForm(deliver)
        signupPage.submit()
        var expectedMesssage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMesssage)
    })


    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()
        deliver.email_address = 'fula sd39 s'

        signupPage.go()
        signupPage.filForm(deliver)
        signupPage.submit()
        var expectedMesssage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMesssage)
    })


    context('Require fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'deliver_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]


        beforeEach(function () {
            signupPage.go()
            signupPage.submit()
        })


        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})
