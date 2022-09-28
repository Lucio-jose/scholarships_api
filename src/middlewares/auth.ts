import { NextFunction, Request, Response } from "express";
import auth from "../config/auth";
import { verify } from 'jsonwebtoken'

type TokenPayload = {
  usuarioId: string;
  iat: number;
  exp: number;
}


class Autenticacao {
    async auth(req: Request, res: Response, next: NextFunction): Promise<any>{
        const authHeader = req.headers.authorization;
    
        if (!authHeader) {
          return res.json({ message: 'Token not provided', status: 400 });
        }
    
        const [, token] = authHeader.split(' ');

        try {
          const decoded = verify(token, auth.key);
          const { usuarioId } = decoded as TokenPayload;
          req.usuarioId = usuarioId;

          return next();
        } catch (err) {
          return res.status(400).json({ catch: `error: ${err}` });
        }
    }
}

export { Autenticacao };