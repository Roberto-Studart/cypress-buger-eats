import signupPage from "../pages/signupPage";
import 'cypress-file-upload';

describe('Unhappy path eletric bike', function(){
    beforeEach(function(){
        cy.fixture('unhappyBike.json').then((d)=>{
            this.unhappyBike = d
        })
        signupPage.go()
    })


    it('BIKE: invalid document', function(){
        signupPage.fillForm(this.unhappyBike.invalidCpf)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('BIKE: undefined CNH', function(){
        signupPage.fillFormWithoutCnh(this.unhappyBike.nullCNH)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Adicione uma foto da sua CNH'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('BIKE: did not choose the delivery method', function(){
        signupPage.fillFormWithoutMethod(this.unhappyBike.outMethod)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Selecione o método de entrega'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('BIKE: invalid email address', function(){
        signupPage.fillForm(this.unhappyBike.invalidEmail)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('BIKE: invalid whatsapp', function(){
        signupPage.fillForm(this.unhappyBike.invalidWhatsapp)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Whatsapp com formato incorreto'
        signupPage.alertMessageShouldBe(expectedMessage)
    })   

})



describe('Unhappy path motorcycle', function(){
    beforeEach(function(){
        cy.fixture('unhappyMotorcycle.json').then((d)=>{
            this.unhappyMotorcycle = d
        })
        signupPage.go()
    })


    it('MOTORCYCLE: invalid document', function(){
        signupPage.fillForm(this.unhappyMotorcycle.invalidCpf)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('MOTORCYCLE: undefined CNH', function(){
        signupPage.fillFormWithoutCnh(this.unhappyMotorcycle.nullCNH)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Adicione uma foto da sua CNH'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('MOTORCYCLE: did not choose the delivery method', function(){
        signupPage.fillFormWithoutMethod(this.unhappyMotorcycle.outMethod)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Selecione o método de entrega'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('MOTORCYCLE: invalid email address', function(){
        signupPage.fillForm(this.unhappyMotorcycle.invalidEmail)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('MOTORCYCLE: invalid whatsapp', function(){
        signupPage.fillForm(this.unhappyMotorcycle.invalidWhatsapp)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Whatsapp com formato incorreto'
        signupPage.alertMessageShouldBe(expectedMessage)
    })
})



describe('Unhappy path car/van', function(){
    beforeEach(function(){
        cy.fixture('unhappyMotorcycle.json').then((d)=>{
            this.unhappyCar = d
        })
        signupPage.go()
    })


    it('CAR/VAN: invalid document', function(){
        signupPage.fillForm(this.unhappyCar.invalidCpf)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    it('CAR/VAN: undefined CNH', function(){
        signupPage.fillFormWithoutCnh(this.unhappyCar.nullCNH)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Adicione uma foto da sua CNH'
        signupPage.alertMessageShouldBe(expectedMessage)
})

    it('CAR/VAN: did not choose the delivery method', function(){
        signupPage.fillFormWithoutMethod(this.unhappyCar.outMethod)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Selecione o método de entrega'
        signupPage.alertMessageShouldBe(expectedMessage)
})

    it('CAR/VAN: invalid email address', function(){
        signupPage.fillFormWithoutMethod(this.unhappyCar.invalidEmail)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMessage)
})

    it('CAR/VAN: invalid whatsapp', function(){
        signupPage.fillFormWithoutMethod(this.unhappyCar.invalidWhatsapp)
        //signupPage.checkDesign()
        signupPage.submit()
        var expectedMessage = 'Oops! Whatsapp com formato incorreto'
        signupPage.alertMessageShouldBe(expectedMessage)
})
})


describe('Checking all fields', function(){
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
