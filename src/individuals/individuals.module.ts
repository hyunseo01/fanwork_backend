import { Module } from '@nestjs/common';
import { IndividualsService } from './individuals.service';
import { IndividualsController } from './individuals.controller';
import { Individual } from './entities/individual.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Individual])],
  controllers: [IndividualsController],
  providers: [IndividualsService],
})
export class IndividualsModule {}
