import { IsEmail, IsString } from 'class-validator';

export class SigninInternalDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
