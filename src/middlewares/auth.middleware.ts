import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import {HttpException} from "@exceptions/HttpException";

export class AuthMiddleware {
  public authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.body.token || req.query.token || req.headers.authorization;

      if (token) {
        jwt.verify(token.substring(7, token.length), process.env.JWT_SECRET_KEY, (err, decoded) => {
          if (err) {
            return res.status(401).json({
              status: "error",
              code: "unauthorized"
            });
          } else {
            req.user = decoded;
            next();
          }
        });
      }
      else{
        return res.status(401).json({
          status: "error",
          code: "unauthorized"
        });
      }

    } catch (error) {
      next(error);
    }
  }
}
