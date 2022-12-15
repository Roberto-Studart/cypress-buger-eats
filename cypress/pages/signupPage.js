
class SignupPage{

    go(){
        cy.visit('/')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver h1').should('have.text','Cadastre-se para  fazer entregas')
}

    filForm(deliver){
        cy.get('input[name=fullName]').type(deliver.name)
        cy.get('input[name=cpf]').type(deliver.CPF)
        cy.get('input[name=email]').type(deliver.email_address)
        cy.get('input[name=whatsapp]').type(deliver.whatsapp)
        cy.get('input[name=postalcode]').type(deliver.address.postalCode)
        cy.get('input[name=address-number]').type(deliver.address.details)
        cy.get('input[name=address-details]').type(deliver.address.details)
        cy.contains('.delivery-method li',deliver.delivery_method).click()
        cy.get('input[accept="image/*"]').attachFile(deliver.cnh)
}

    submit(){
        cy.get('button[type=submit]').click()
}

    modalContentShouldBe(expectedMesssage){
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMesssage)
}
    
    alertMessageShouldBe(expectedMesssage){
        //cy.get('.alert-error').should('have.text', expectedMesssage)
        cy.contains('.alert-error', expectedMesssage).should('be.visible')
    }

    checkDesign(valor){
        cy.get('h1').should('have.text', valor)
    }
}
export default new SignupPage;