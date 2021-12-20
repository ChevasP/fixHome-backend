import { Request, Response } from "express";
import {db} from "../index";
import { Servicio } from "../models/servicio";

export async function listServices(req: Request, res: Response) {
    try {
        let snapshot = await db.collection("services").get();
        return res.status(200).json(snapshot.docs.map(doc => Servicio(doc.data(), doc.id)));
    } catch (err) {
        return handleError(res, err);
    }
}
function handleError(res: Response, err:any){
    return res.status(500).send({message: `${err.code} - ${err.message}`});
}