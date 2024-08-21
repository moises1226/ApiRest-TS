import {connect} from 'mongoose';
 
//importamos nuestra bd 
import { MONGO_URL } from '../config/index';


//creamos un metodo donde vamos a indicar la conexion
export const conectionDB = async () => {

    try {
        await connect(MONGO_URL as string);
        console.log('La conexion fue realizada con exito');
        
    }catch(error){

        console.log('la conexion no fue realizada' , error);
        
    }
   
    
        
};