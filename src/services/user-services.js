const {User}= require('../models/user')
const jwt = require('jsonwebtoken')

async function getAll(){
    const listUser =  await User.findAll()
    return listUser
}

async function getById(id){

    const user= await User.findByPk(id)
   
    if(!user){

      throw new Error('Usuario no encontrado')
    }
    return user
}

async function createUser (name, lastname, email, password){
    const newUser = new User()
    
    newUser.name= name
    newUser.lastname= lastname
    newUser.email = email
    newUser.password = password

    const userCreated = await newUser.save()
    return userCreated
}

async function editUser (id, name, lastname, email, password){
    const user = await getById(id)
    console.log(user)
   if(name){
    user.name=name
   }
   if(lastname){
    user.lastname=lastname
   }
   if(email){
    user.email=email
   }
   if(password){
    user.password=password
   }

    const userEdited = await user.save()
    return userEdited
}

async function deleteUser (id){
    const user = await getById(id)
    //console.log(user)
    await user.destroy()
}

async function login (email, password){
    const user = await User.findOne({
        where:{
            email:email,
            password:password
        }
    })
    
    if(!user){
        
        throw new Error('Email y Password Incorrectos')
        //retornamos un error
    }
    const token = jwt.sign({
        id:user.id,
        email : user.email,
        name: user.name
    },'ClaveUltraSecreta')
    return {
        accesToken : token
    }
     
}

module.exports={getAll, getById, createUser, editUser, deleteUser, login}