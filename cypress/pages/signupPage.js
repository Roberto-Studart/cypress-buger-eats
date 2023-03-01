class SignupPage {

    go() {
        cy.visit('/')
        cy.get('img').should('be.visible')
        cy.get('#page-home h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('#page-home p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
        cy.get('a[href="/deliver"]').should('be.visible')
        cy.get('a[href="/deliver"]').click()    
    }

    fillForm(dados) {
        cy.get('input[name=fullName]').type(dados.name)
        cy.get('input[name=cpf]').type(dados.CPF)
        cy.get('input[name=email]').type(dados.email_address)
        cy.get('input[name=whatsapp]').type(dados.whatsapp)
        cy.get('input[name=postalcode]').type(dados.address.postalCode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name=address]').should('be.visible')
        cy.get('input[name=address-number]').type(dados.address.number)
        cy.get('input[name=address-details]').type(dados.address.district)
        cy.get('input[name=district]').should('be.visible')
        cy.get('input[name=city-uf]').should('be.visible')
        cy.contains('.delivery-method li', dados.delivery_method).click()
        cy.get('#page-deliver > form > div > input[type=file]').attachFile(dados.cnh)
    }

    fillFormWithoutCnh(dados) {
        cy.get('input[name=fullName]').type(dados.name)
        cy.get('input[name=cpf]').type(dados.CPF)
        cy.get('input[name=email]').type(dados.email_address)
        cy.get('input[name=whatsapp]').type(dados.whatsapp)
        cy.get('input[name=postalcode]').type(dados.address.postalCode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name=address]').should('be.visible')
        cy.get('input[name=address-number]').type(dados.address.number)
        cy.get('input[name=address-details]').type(dados.address.district)
        cy.get('input[name=district]').should('be.visible')
        cy.get('input[name=city-uf]').should('be.visible')
        cy.contains('.delivery-method li', dados.delivery_method).click()
    }

    fillFormWithoutMethod(dados) {
        cy.get('input[name=fullName]').type(dados.name)
        cy.get('input[name=cpf]').type(dados.CPF)
        cy.get('input[name=email]').type(dados.email_address)
        cy.get('input[name=whatsapp]').type(dados.whatsapp)
        cy.get('input[name=postalcode]').type(dados.address.postalCode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name=address]').should('be.visible')
        cy.get('input[name=address-number]').type(dados.address.number)
        cy.get('input[name=address-details]').type(dados.address.district)
        cy.get('input[name=district]').should('be.visible')
        cy.get('input[name=city-uf]').should('be.visible')
        cy.get('#page-deliver > form > div > input[type=file]').attachFile(dados.cnh)
    }

    checkDesign(){
        cy.get('img[src = "/static/media/logo.e7289086.svg"]').should('be.visible')
        cy.get('a[href="/"]').should('be.visible')
        cy.get('h1').should('have.text', 'Cadastre-se para  fazer entregas')
        cy.get('fieldset:nth-child(2) > header > h2').should('have.text', 'Dados')
        cy.get('.alert-warning').should('have.text', 'Atenção: CNH é obrigatória somente para veículos motorizados. Mesmo assim é importante enviar um documento com foto para aprovação do seu cadastro.')
    }

    submit(){
        cy.get('.button-success').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

    /*
    checkingMethod(expectedMessage){
        cy.get('#page-deliver > form > fieldset:nth-child(4) > span').should('have.text', expectedMessage)}
    checkingWhatsapp(expectedMessage){
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span').should('have.text', expectedMessage)}
    */
} 

export default new SignupPage;