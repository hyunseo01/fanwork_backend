import { Module } from '@nestjs/common';
import { MarketEventsService } from './market-events.service';
import { MarketEventsController } from './market-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketEvent } from './entities/market-event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MarketEvent])],
  controllers: [MarketEventsController],
  providers: [MarketEventsService],
})
export class MarketEventsModule {}
