//el atributo Shema es para definir cuales van a ser los atrbutos que va a tener el documento
//el Shema es una clase
import { Schema , model  } from "mongoose";

//esto es un esquema de como queremos que este definida nuestra shema
const tareaShema = new Schema ({


    name : {
        type : String
    },

    descripcion : {

        type : String
    },
    status : {

        type: Boolean,
        default:true
    }
}
 
);

//model( 'nombre del esquema ' , 'el esquema definido(shema)')
export const TareaModel = model('Tareas' , tareaShema)