import { TareaModel } from "../model"



export const servicioTarea = {

    getAll : async () => {

       return await TareaModel.find();

    },

    // con este atributo creamos y guardamos un nuevo documento en nuestra bd de mongo
    create : async (entidad : object) => {
        return await TareaModel.create(entidad);
    },

    //con este metodo actualizamos la base de datos con datos nuevos q queremos ingresar
    update : async (id: string , body : object ) => {

        return await TareaModel.findByIdAndUpdate(id , body);
    },

    //con este metodo eliminamos un documento con su respectivo id
    delete : async (id:string) => {
        return await TareaModel.findByIdAndDelete
        (id);
    }
}