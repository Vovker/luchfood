import {IsString} from "class-validator";

class CreateNewsDto {

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @IsString()
  img: string;
}

export default CreateNewsDto;
