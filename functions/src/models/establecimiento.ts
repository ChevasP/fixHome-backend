export interface Establecimiento {
    idEstablecimiento? :string,
    name: string,
    description: string,
    quealification: number,
    ownerName: string,
    imageURL: string,
    contactOwner: string,
    
}

export function Establecimiento(data :any, id?:string){
    const {name, description, quealification, ownerName, imageURL , contactOwner} = data;

    let object :Establecimiento = { 
        idEstablecimiento: id,
        name: name,                
        description: description,
        quealification : quealification,
        ownerName: ownerName,
        imageURL: imageURL,
        contactOwner: contactOwner,    
    };
    return object;
}