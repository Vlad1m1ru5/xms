import { ValidateDto } from './validate.dto';

export class ValidateUserDto extends ValidateDto {
  constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }
}
