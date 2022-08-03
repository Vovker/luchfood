import AuthDto from "@/dtos/auth/auth.dto";
import {HttpException} from "@exceptions/HttpException";
import jwt from 'jsonwebtoken';

export class AuthService {

  public async login(data: AuthDto): Promise<string> {

    if(data.password !== process.env.ADMIN_PASSWORD || data.username !== process.env.ADMIN_USERNAME) {
      throw new HttpException(401, 'Invalid credentials');
    }

    return AuthService.generateToken(data.username);
  }

  private static async generateToken(username): Promise<string> {
    const payload = {
      username: username
    };

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    });
  }
}
