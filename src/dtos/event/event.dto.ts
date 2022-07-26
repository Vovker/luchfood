import {IsDate, IsNumber, IsString} from "class-validator";

class EventDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  img: string;

  @IsDate()
  date: Date;

  @IsNumber()
  type: number;
}

export default EventDto;
