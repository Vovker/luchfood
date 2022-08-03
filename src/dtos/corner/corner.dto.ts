import {IsNumber, IsString} from "class-validator";

class CornerDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  logo: string;

  @IsString()
  mainImage: string;

  @IsString()
  address: string;

  @IsString()
  instagram: string;

  @IsNumber()
  kitchenTypeId: number;
}

export default CornerDto;
