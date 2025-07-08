import { Module } from '@nestjs/common';
import { FanbaseService } from './fanbase.service';
import { FanbaseController } from './fanbase.controller';
import { FanbaseInfo } from './entities/fanbase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FanbaseInfo])],
  controllers: [FanbaseController],
  providers: [FanbaseService],
})
export class FanbaseModule {}
