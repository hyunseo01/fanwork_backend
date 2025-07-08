import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { InternalUsersModule } from './internal-users/internal-users.module';
import { AuthModule } from './auth/auth.module';
import { PartnersModule } from './partners/partners.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { IndividualsModule } from './individuals/individuals.module';
import { StaffsModule } from './staffs/staffs.module';
import { ProjectsModule } from './projects/projects.module';
import { ConsortiumsModule } from './consortiums/consortiums.module';
import { ContractsModule } from './contracts/contracts.module';
import { SettlementsModule } from './settlements/settlements.module';
import { KResourcesModule } from './k-resources/k-resources.module';
import { ChatsModule } from './chats/chats.module';
import { FanbaseModule } from './fanbase/fanbase.module';

import { ConsortiumsParticipantsModule } from './consortiums-participants/consortiums-participants.module';
import { MarketEventsModule } from './market-events/market-events.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ProjectParticipantsModule } from './project-participants/project-participants.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    InternalUsersModule,
    AuthModule,
    PartnersModule,
    OrganizationsModule,
    IndividualsModule,
    StaffsModule,
    ProjectsModule,
    ConsortiumsModule,
    ContractsModule,
    SettlementsModule,
    KResourcesModule,
    ChatsModule,
    FanbaseModule,
    ProjectParticipantsModule,
    ConsortiumsParticipantsModule,
    MarketEventsModule,
    TransactionsModule,
    ProjectParticipantsModule,
  ],
})
export class AppModule {}
