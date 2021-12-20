export interface Establecimiento {
    idEstablecimiento? :string,
    name: string,
    description: string,
    quealification: number,
    ownerName: string
    
}

export function Establecimiento(data :any, id?:string){
    const {name, description, qualification, ownerName  } = data;

    let object :Establecimiento = { 
        idEstablecimiento: id,
        name: name,                
        description: description,
        quealification : qualification,
        ownerName: ownerName
            
    };
    return object;
}