import { Injectable } from '@nestjs/common';
import { CreateMarketEventDto } from './dto/create-market-event.dto';
import { UpdateMarketEventDto } from './dto/update-market-event.dto';

@Injectable()
export class MarketEventsService {
  create(createMarketEventDto: CreateMarketEventDto) {
    return 'This action adds a new marketEvent';
  }

  findAll() {
    return `This action returns all marketEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marketEvent`;
  }

  update(id: number, updateMarketEventDto: UpdateMarketEventDto) {
    return `This action updates a #${id} marketEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} marketEvent`;
  }
}
