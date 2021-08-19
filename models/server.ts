import express , {Application} from 'express'
import cors from 'cors';
import usuariosRouter from '../routes/routes';
import db from '../db/conection';



class Server {

//  clase privada 
// luego de los dos puntos, describo el tipo.
// declaro siempre antes y luego en el constructor
    private app : Application;
    private port : string 
    private apiPaths = {
        usuarios : '/api/usuarios'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.conectionDB()
        this.middlewares()
        this.routes()
    }

    listen(){
        this.app.listen(this.port , ()=>{
            console.log(`servidor corriendo en el puerto  ${this.port}`)
        })
    }

    // conectar base de datos

    middlewares(){
        // cors
        this.app.use(cors())

        // parseo del body

        this.app.use(express.json())

        // public
        this.app.use(express.static('public'))

    }


    routes(){

        this.app.use(this.apiPaths.usuarios , usuariosRouter )

    }

    conectionDB(){


        try{

            db.authenticate()
            console.log('db online')

        }catch(e){
            throw new Error(e)
        }
    }
}


export default  Server