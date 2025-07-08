import { PartialType } from '@nestjs/swagger';
import { CreateMarketEventDto } from './create-market-event.dto';

export class UpdateMarketEventDto extends PartialType(CreateMarketEventDto) {}
