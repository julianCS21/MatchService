import { MatchService } from 'src/application/match.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Match } from 'src/domain/match.model';

@Controller('api/matches')
export class MatchController {
  private _matchService: MatchService;

  constructor(matchService: MatchService) {
    this._matchService = matchService;
  }

  @Get()
  async getMatches(): Promise<Match[]> {
    try {
      return this._matchService.getMatches();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'this service is no disable',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/teams/:id')
  async getMatchesByTeam(@Param('id') teamId: string): Promise<Match[]> {
    try {
      return this._matchService.getMatchesByTeam(teamId);
    } catch (error) {
      throw new HttpException(
        {
          status: error.status,
          error: error.message,
        },
        error.status,
        {
          cause: error,
        },
      );
    }
  }
}
