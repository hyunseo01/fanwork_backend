import { Module } from '@nestjs/common';
import { InternalUsersService } from './internal-users.service';
import { InternalUsersController } from './internal-users.controller';
import { InternalUser } from './entities/internal-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InternalUser])],
  controllers: [InternalUsersController],
  providers: [InternalUsersService],
})
export class InternalUsersModule {}
