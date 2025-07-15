import { Module } from '@nestjs/common';
import { MarketEventsService } from './market-events.service';
import { MarketEventsController } from './market-events.controller';

@Module({
  controllers: [MarketEventsController],
  providers: [MarketEventsService],
})
export class MarketEventsModule {}
