import {IsString} from "class-validator";

class NewsDto {

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @IsString()
  img: string;
}

export default NewsDto;
