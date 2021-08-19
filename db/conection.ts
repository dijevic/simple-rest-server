import { Sequelize } from "sequelize";


// coneccion a mi db :)
// db usuario y contrasena
const db = new Sequelize('node','diginho','1234',{
    host : 'localhost',
    dialect : 'mariadb',

});

export default db