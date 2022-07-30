import {IsString} from "class-validator";

class KitchenTypeDto {
  @IsString()
  name: string;
}

export default KitchenTypeDto;
