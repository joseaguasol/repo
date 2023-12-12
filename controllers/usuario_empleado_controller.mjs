import modelUserEmpleado from "../models/usuario_empleado_model.mjs";

export const getAllUserEmpleados = async (req,res) => {
    try {
        const alluserempleados= await modelUserEmpleado.getUsersEmpleado();
        res.json(alluserempleados);
    } catch (error) {
        res.status(500).json({error:error.message});

    }
}

export const createUserEmpleados = async (req,res) => {
    try{
        const newEmpleado = req.body;
        const empleadoCreated = await modelUserEmpleado.createUserEmpleado(newEmpleado);
        res.json({empleadoCreated});
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}
export const updateUserEmpleados = async (req,res)=>{
    try {
        const {userEmpleadoId} = req.params;
        const id = parseInt(userEmpleadoId,10);
        console.log('el id',id);
        const data = req.body;
        console.log('data',data)
        const updateUserEmpleado = await modelUserEmpleado.updateUserEmpleado(id,data);
        res.json(updateUserEmpleado);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
export const deleteUserEmpleados = async (req,res) => {
    try {
        const { userEmpleadoId } = req.params;
        const id = parseInt(userEmpleadoId, 10);
        const deleteResult = await modelUserEmpleado.deleteUserEmpleado(id);

        if (deleteResult) {
            res.json({ mensaje: 'Usuario Empleado eliminado exitosamente' });
        } else {
            // Si rowCount no es 1, significa que no se encontró un cliente con ese ID
            res.status(404).json({ error: 'No se encontró la ruta con el ID proporcionado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
