import { TareaModel } from "../model"



export const servicioTarea = {

    async getAll(){

       return await TareaModel.find();

    }

}