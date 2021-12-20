export interface Servicio {
    idServicio? :string,
    ubicacion: string,
    resenia_servicio: string,
    calificacion_servicio: number,

}

export function Servicio(data :any, id?:string){
    const {resenia_servicio, ubicacion,calificacion_servicio} = data;

    let object :Servicio = { 
        idServicio: id,
        ubicacion: ubicacion,                
        resenia_servicio: resenia_servicio,
        calificacion_servicio : calificacion_servicio
            
    };
    return object;
}