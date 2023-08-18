const userServices = require('../services/user-services')

async function getAllUser(req,res){

    const usuarios= await userServices.getAll()
    res.send(usuarios)
}

async function getById (req, res, next){
    const {id} = req.params;

    try {
        const user= await userServices.getById(id)
        res.send(user)
        
    } catch (error) {
        next(error)
    }
}

async function createUser (req,res){
    const {name, lastname, email, password} = req.body;
    const newUser= await userServices.createUser(name, lastname, email, password)
    res.send(newUser)
}

async function editUser (req,res){
    const {id} = req.params;
    const {name, lastname, email, password} = req.body;

    const user= await userServices.editUser (id, name, lastname, email, password)
    res.send(user)
}

async function deleteUser (req, res){
    const {id} = req.params;
    await userServices.deleteUser(id)
    res.status(200).send('usuario eliminado satisfactoriamente')
}

async function login (req,res,next){
    const {email, password} = req.body;

    try {
        const userToken = await userServices.login(email, password)
        res.status(200).send(userToken)
        
    } catch (error) {
        next(error)
    }
   
}

module.exports = {getAllUser, getById, createUser, editUser, deleteUser, login} 