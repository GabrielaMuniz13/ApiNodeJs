const database = require('../database/connection');

class LoginController {
    Login(request,response){

        database.select("usuario","senha").table("usuario").then(data=>{
            console.log(data)
            response.json({message:"Login Correto!"})
        }).catch(error=>{
            console.log(error)
        })

    }
}

module.exports = new LoginController();