export interface Usuario {
    id? :string,
    displayname: string,
    email: string,
    password: string,
    
    
}

export function Usuario(data :any, id?:string){
    const {displayname, password,  email} = data;

    let object :Usuario = { 
        id: id,
        displayname: displayname,                
        password: password,
        email: email,
            
    };
    return object;
}