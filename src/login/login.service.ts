import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { getUsernamePasswords } from './username-password-initializer';

@Injectable()
export class LoginService {

  async login(loginDto: LoginDto): Promise<number> {
    const existingUserPassword: Map<string, LoginDto> = getUsernamePasswords();
    const currentUser = existingUserPassword.get(loginDto.username);
    if (currentUser !== undefined && currentUser !== null && currentUser.password === loginDto.password) {
      let successCode: number = this._generateSuccessCode();
      console.log("Successful login!!! code:", successCode);
      return successCode;
    } else {
      return -1;
    }
  }

  _generateSuccessCode(): number {
    /// secret formula :)
  }

}
