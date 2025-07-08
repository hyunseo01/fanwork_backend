import { Module } from '@nestjs/common';
import { KResourcesService } from './k-resources.service';
import { KResourcesController } from './k-resources.controller';
import { KResource } from './entities/k-resource.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KResource])],
  controllers: [KResourcesController],
  providers: [KResourcesService],
})
export class KResourcesModule {}
