import {NextFunction, Request, Response} from "express";
import {AuthService} from "@/services/auth.service";
import AuthDto from "@/dtos/auth/auth.dto";

export class AuthController {
  private authService: AuthService = new AuthService();

  public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: AuthDto = req.body;
      const result = await this.authService.login(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
