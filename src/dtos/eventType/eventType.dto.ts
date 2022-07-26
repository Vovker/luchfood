import {IsString} from "class-validator";

class EventTypeDto {
  @IsString()
  name: string;
}

export default EventTypeDto;
