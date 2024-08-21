// El método route() de Express.js se utiliza para crear rutas manejadas por un solo punto de entrada, lo que permite definir múltiples métodos HTTP (como GET, POST, PUT, DELETE, etc.) para una misma ruta de manera encadenada. Este enfoque es útil para organizar y gestionar las rutas de manera más limpia y estructurada.

import { Router } from "express";

//traemos el metdoo getAll de controller 
import {tareasControladoras} from '../controllers'

const router = Router();

router.get('/' , tareasControladoras.getAll_Tareas)

export default router;