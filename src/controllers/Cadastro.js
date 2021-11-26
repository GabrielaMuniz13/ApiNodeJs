const database = require('../database/connection');

class RegistrationController {
    Cadastro(request,response){
        const {id, nome,usuario,senha,email} = request.body

        console.log(id,nome,usuario,senha,email);

        database.insert({id,nome,usuario,senha,email}).table("usuario").then(data=>{
            console.log(data)
            response.json({message:"Cadastro criado com sucesso"})
        }).catch(error=>{
            console.log(error)
        })

    }
}

module.exports = new RegistrationController();