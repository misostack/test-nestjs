import { Module } from '@nestjs/common';
import { UserController } from './user/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user-entity';
import { UserService } from './services/user-service/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
