export interface Usuario {
    id? :string,
    identificationCard: string,
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
    
}

export function Usuario(data :any, id?:string){
    const {name, lastname, password, identificationCard, email, confirmPassword } = data;

    let object :Usuario = { 
        identificationCard: identificationCard,
        id: id,
        name: name,                
        lastname: lastname,
        password: password,
        email: email,
        confirmPassword: confirmPassword,
            
    };
    return object;
}