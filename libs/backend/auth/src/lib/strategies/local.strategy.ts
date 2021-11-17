import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { ValidateUserDto } from '../dto/validate-user.dto';
import { ValidateDto } from '../dto/validate.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(validateDto: ValidateDto) {
    const validateUser = new ValidateUserDto(
      validateDto.username,
      validateDto.password
    );
    const user = await this.authService.validateUser(validateUser);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
