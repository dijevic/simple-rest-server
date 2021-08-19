import { DataTypes } from "sequelize";
import db from "../db/conection";


const Usuario = db.define('Usuario',{
    nombre : {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING
    },
    estado : {
        type: DataTypes.BOOLEAN , 
    },
    // createdAt : {
    //     type : DataTypes.STRING
    // },
    // updatedAt : {
    //     type : DataTypes.STRING
    // }
    
})

export default Usuario