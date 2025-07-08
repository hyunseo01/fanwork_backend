import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketEventsService } from './market-events.service';
import { CreateMarketEventDto } from './dto/create-market-event.dto';
import { UpdateMarketEventDto } from './dto/update-market-event.dto';

@Controller('market-events')
export class MarketEventsController {
  constructor(private readonly marketEventsService: MarketEventsService) {}

  @Post()
  create(@Body() createMarketEventDto: CreateMarketEventDto) {
    return this.marketEventsService.create(createMarketEventDto);
  }

  @Get()
  findAll() {
    return this.marketEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketEventDto: UpdateMarketEventDto) {
    return this.marketEventsService.update(+id, updateMarketEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketEventsService.remove(+id);
  }
}
