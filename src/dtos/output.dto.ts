import { IsString, IsNotEmpty } from "class-validator";

export class LoginOutputDto {
  @IsNotEmpty()
  @IsString()
  readonly message!: string;
}
