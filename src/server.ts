import express,{Express, json} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importamos la bd mongo
import {conectionDB} from "../database/index";


//importamos nuestro puerto
import { PORT } from '../config/index'
//importamos las rutas
import {routes} from '../routes/index'

//cremos una clase para exportador 
export class Server {

    private app : Express;

    constructor(){

        this.app = express(); //inicializamos con el metodo express();
        conectionDB();
        this.consfiguracion();
        this.midlewares();
        this.rutas()
    }

    consfiguracion(){

        this.app.set('port' , PORT);

    }

    midlewares(){

        this.app.use(morgan('dev'));
        this.app.use(cors()) //el cors hace que cualquier disp pueda consuir la api
        this.app.use(express.json()) //con esto estamos indicando al servidor que pueda leer el formato json
    }


    rutas(){

        this.app.get('/' , (req , res) => {


            res.status(200).json({

                status:'el servidor funciona'

            })

        })

        this.app.use('/api/tarea' , routes.TareaRouter)

    }

    Listen(){

        this.app.listen(this.app.get('port'), () =>{


            console.log('el servidor funciona en el puerto ' + this.app.get('port'));
            

        } )
    }

}