import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { InternalUser } from '../internal-users/entities/internal-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternalUsersModule } from '../internal-users/internal-users.module';

@Module({
  imports: [TypeOrmModule.forFeature([InternalUser]), InternalUsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
