import { Request, Response } from "express";
import {db} from "../index";
import { Establecimiento } from "../models/establecimiento";

export async function listEstablishment(req: Request, res: Response) {
    try {
        let snapshot = await db.collection("establishment").get();
        return res.status(200).json(snapshot.docs.map(doc => Establecimiento(doc.data(), doc.id)));    
    } catch (err) {
        return handleError(res, err);
    }
}
function handleError(res: Response, err:any){
    return res.status(500).send({message: `${err.code} - ${err.message}`});
}