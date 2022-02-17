import * as admin from 'firebase-admin';
import { Request, Response } from "express";
import { Respuesta } from '../models/respuesta';

export async function registro(req: Request, res: Response) {           
    try{     
        const { email, password, displayName, role, identification } = req.body;
        const userId = await admin.auth().getUserByEmail(email);
        if(userId != null){
            return res.status(400).json(Respuesta('El usuario ya esta registrado', `Usuario ${email}`, userId , 400));    
        }

        const user = await admin.auth().createUser({
            email,
            password,
            displayName
        });
        admin.auth().getUserByEmail(email).then(value => {
            admin.auth().setCustomUserClaims(value.uid, {
                role: role,
                identification: identification,
            });
        })
        return res.status(201).json(Respuesta('Usuario creado', `Usuario ${user.displayName} creado y rol ${role}`, user,201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}