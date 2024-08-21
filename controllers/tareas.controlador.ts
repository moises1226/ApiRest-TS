//traemos a los metdo req y res de express para asi poder accerder a sus metodos
import { Response , Request  } from "express"

//importamos el metodo servicio tarea  q contiene los datos de la base de datos
import { servicioTarea } from "../service";


export const tareasControladoras = {

    getAll_Tareas : async (req : Request  , res : Response ) => {

        try {
            
            //asignamos nuestros datos de mato getAll al data 
            
            const data = await servicioTarea.getAll();
            //todos los datos q estamos recopilando en data vamos a restornarlos en formato json
            return res.json(data);
            
        } catch (error:any) {
            res.status(400).json({
    
                message : error.message
            })
        }
        
    }


}

