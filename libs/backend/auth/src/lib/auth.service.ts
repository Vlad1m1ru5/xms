import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserDto, UserService } from '@xms/backend-user';
import { LoginDto } from './dto/login.dto';
import { SignPayloadDto } from './dto/sign-payload.dto';
import { ValidateDto } from './dto/validate.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(validateUserDto: ValidateDto) {
    const findUser = new FindUserDto(
      validateUserDto.username,
      validateUserDto.password
    );
    const user = await this.userService.findOneByUser(findUser);
    if (user && user.password === validateUserDto.password) {
      return { username: user.username, id: user.id.toString() };
    }
    return null;
  }

  async login(loginUserDto: LoginDto) {
    const signPayload = new SignPayloadDto(
      loginUserDto.username,
      loginUserDto.id
    );
    return {
      access_token: this.jwtService.sign({ ...signPayload }),
    };
  }
}
