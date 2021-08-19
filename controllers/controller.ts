import { Request, Response } from "express";
import Usuario from "../models/usuarios";




export const getUsuarios = async(req: Request , res : Response)=>{

const usuario = await Usuario.findAll()
    res.json({success : true , message : usuario})
}

export const getUsuario = async  (req: Request , res : Response)=>{

    const {id} =  req.params;
    const usuario = await Usuario.findByPk(id)

    if(!usuario){
        return res.status(404).json({success : false, message:`no existe un usuario con el id ${id}`});
    }

    res.json({success : true , usuario})
}

export const postUsuario = async (req: Request , res : Response)=>{

    const {body} =  req;
    if(!body){
        return res.status(400).json({success : false, message:`body nullss`})
    }

    const existeEmail = await Usuario.findOne({
        where: {email: body.email}
    })

    if(existeEmail){
        return res.status(404).json({success : false, message:`correo registrado, intente con otro`})
    }

    try{

        const usuario = Usuario.build(body)     
        await usuario.save()

        res.json({success : true , usuario})
    }catch(e){
        res.status(500).json({success: false , message:`hable con el administrador`})
        console.log(e)
    }
}

export const putUsuario = async (req: Request , res : Response)=>{

    const {id} =  req.params;
    const {body} =  req;

    // verifico que no exista un usuario con el mismo correo
  

    try{

        const usuario = await Usuario.findByPk(id) 

        if(!usuario){
        return res.status(404).json({success : false, message:`el usuario con el id ${id} no existe`})

        }
        const existeEmail = await Usuario.findOne({
            where: {email: body.email}
        })
    
        if(existeEmail){
            return res.status(404).json({success : false, message:`correo registrado, intente con otro`})
        }

        await usuario.update(body)
        res.json({success : true , usuario})
    }catch(e){
        res.status(500).json({success: false , message:`hable con el administrador`})
        console.log(e)
    }
}

export const deleteUsuario = async (req: Request , res : Response)=>{

    
    
    try{
        const {id} =  req.params;

        const usuario = await Usuario.findByPk(id) 

        if(!usuario){
            return res.status(404).json({success : false, message:`el usuario con el id ${id} no existe`})
        
        }

        // eliminar de manera fisica
        // usuario.destroy()/

        usuario.update({estado:false})

         res.json({success : true , usuario})


    }catch(e){
        res.status(500).json({success: false , message:`hable con el administrador`})
        console.log(e)
    }
}