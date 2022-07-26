import {IsString} from "class-validator";

class GalleryDto {
  @IsString()
  img: string;
}

export default GalleryDto;
