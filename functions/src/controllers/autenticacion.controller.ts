import * as admin from 'firebase-admin';
import { Request, Response } from "express";
import { Respuesta } from '../models/respuesta';

export async function registro(req: Request, res: Response) {     
    try{     
        const { email, password, displayName, role, identification } = req.body;
        let userData:any = null;
        await admin.auth().createUser({
            email,
            password,
            displayName
        }).then(async function () {
            //Add Claim Role
            userData = await admin.auth().getUserByEmail(email).catch(() => { 
                return res.status(400).json(Respuesta('No se pudo obtener la información', `Usuario ${email}`, userData.Id , 400));
            });
            admin.auth().setCustomUserClaims(userData.uid, {
                role: role,
                identification: identification
            });
        })
        .catch(function () {
            return res.status(400).json(Respuesta('El usuario ya esta registrado', `Usuario ${email}`, {} , 400));
        }); 
        return res.status(201).json(Respuesta('Usuario creado', `Usuario ${userData.displayName} creado y rol ${role}`, userData,201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}