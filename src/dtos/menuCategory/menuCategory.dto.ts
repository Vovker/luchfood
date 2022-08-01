import {IsNotEmpty, IsNumber, IsString} from "class-validator";

class MenuCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  cornerId: number;
}

export default MenuCategoryDto;
