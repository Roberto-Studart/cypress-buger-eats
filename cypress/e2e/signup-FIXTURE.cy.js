Cypress.config('defaultComandTimeout', 5000)
import signupPage from '../pages/signupPage';
import 'cypress-file-upload';


describe('Signup', ()=> {
    beforeEach(function(){
        cy.fixture('deliver').then((d/*deliver*/)=>{
            this.deliver = d
        })
    })


    it('User must be deliver',function(){

        signupPage.go()
        signupPage.filForm(this.deliver.signup)
        signupPage.submit()
        const expectedMesssage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMesssage)
    })


    it('Incorrect document',function(){

        signupPage.go()
        signupPage.filForm(this.deliver.cpf_inv)
        signupPage.submit()
        var expectedMesssage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMesssage)
    })


    it('Incorrect email', function(){
        
        signupPage.go()
        signupPage.filForm(this.deliver.email_inv)
        signupPage.submit()
        var expectedMesssage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMesssage)
    })


    context('Require fields', function(){

        const messages =[
                {field: 'name', output: 'É necessário informar o nome'},
                {field: 'cpf', output: 'É necessário informar o CPF'},
                {field: 'email', output: 'É necessário informar o email'},
                {field: 'postalcode', output: 'É necessário informar o CEP'},
                {field: 'number', output: 'É necessário informar o número do endereço'},
                {field: 'deliver_method', output: 'Selecione o método de entrega'},
                {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]


        beforeEach(function(){
            signupPage.go()
            signupPage.submit()
        })
        

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

})
