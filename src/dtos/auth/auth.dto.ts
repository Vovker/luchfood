import {IsString} from "class-validator";

class AuthDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export default AuthDto;
