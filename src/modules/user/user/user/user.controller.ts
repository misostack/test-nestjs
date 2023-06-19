import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/user-service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  listUser() {
    return this.userService.find();
  }
}
