import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { MatchController } from '../infrastructure/inbound/match.controller';
import { MatchService } from '../application/match.service';
import { MatchClient } from '../infrastructure/outbound/match.client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [MatchController],
  providers: [MatchService, MatchClient],
})
export class AppModule {}
