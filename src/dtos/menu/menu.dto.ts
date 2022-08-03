import {IsNotEmpty, IsNumber, IsString} from "class-validator";

class MenuDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  menuCategoryId: number;
}

export default MenuDto;
