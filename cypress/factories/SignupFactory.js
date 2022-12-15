var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            CPF: cpf.generate(),
            email_address: faker.internet.email(firstName),
            whatsapp: '85988793340',
            address:{
                postalCode: 60115082,
                number: 5515,
                street: 'Rua Barão de Aracati',
                details: 'Acolá',
                district: 'Joaquim Távora',
                city_state: 'Fortaleza/CE'
                },
            delivery_method:'Moto',
            cnh:'/images/cnh-digital.jpg'
        }

        return data

    }
    
}