import { Application } from "express";
import { listEstablishment } from "./controllers/establishment_controllers";
import { listServices } from "./controllers/services_controller";
import { listUser } from "./controllers/user_controller";

export function routesUser(app: Application){
    app.get('/api/user', listUser)
}

export function routesServices(app: Application){
    app.get('/api/services', listServices)
}

export function routesEstablishment(app: Application){
    app.get('/api/establishment', listEstablishment)
}