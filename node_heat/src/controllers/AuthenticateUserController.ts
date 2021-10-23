import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController{
  async handle(req:Request, res:Response){
    const service = new AuthenticateUserService();
    service.execute("78632")
  }
}

export {AuthenticateUserController}