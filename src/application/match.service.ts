import { MatchClient } from 'src/infrastructure/outbound/match.client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Match } from '../domain/match.model';

@Injectable()
export class MatchService {
  private readonly _matchClient: MatchClient;

  constructor(matchClient: MatchClient) {
    this._matchClient = matchClient;
  }

  async getMatches(): Promise<Match[]> {
    try {
      return this._matchClient.getMatches();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getMatchesByTeam(teamId: string): Promise<Match[]> {
    try {
      return this._matchClient.getMatchesByTeam(teamId);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
