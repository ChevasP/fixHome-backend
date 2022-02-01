export interface Establecimiento {
    idEstablecimiento? :string,
    name: string,
    description: string,
    quealification: number,
    ownerName: string,
    imageURL: string,
    contactOwner: string,
    typeEstablish: string,
    
}

export function Establecimiento(data :any, id?:string){
    const {name, description, quealification, ownerName, imageURL , contactOwner, typeEstablish} = data;

    let object :Establecimiento = { 
        idEstablecimiento: id,
        name: name,                
        description: description,
        quealification : quealification,
        ownerName: ownerName,
        imageURL: imageURL,
        contactOwner: contactOwner,    
        typeEstablish: typeEstablish,
    };
    return object;
}