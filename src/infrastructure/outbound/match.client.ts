import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Match } from '../../domain/match.model';
import { Area } from '../../domain/area.model';
import { Competition } from '../../domain/competition.model';
import { Season } from '../../domain/season.model';
import { Team } from '../../domain/team.model';
import { Score } from '../../domain/score.model';

@Injectable()
export class MatchClient {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiUrl = this.configService.get<string>('base_football_url');
    this.apiKey = this.configService.get<string>('api_football_key');
  }

  async getMatches(): Promise<Match[]> {
    const url = `${this.apiUrl}/matches`;
    const headers = {
      'X-Auth-Token': this.apiKey,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers }).pipe(
          catchError((err) => {
            if (err.response && err.response.status === 500) {
              throw new HttpException(
                'Internal server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            } else {
              throw new HttpException(
                err.message,
                err.response
                  ? err.response.status
                  : HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }
          }),
        ),
      );

      const matches: Match[] = response.data.matches.map((matchData) => {
        const area = new Area(
          matchData.area.id,
          matchData.area.name,
          matchData.area.code,
          matchData.area.flag,
        );

        const competition = new Competition(
          matchData.competition.id,
          matchData.competition.name,
          matchData.competition.code,
          matchData.competition.type,
          matchData.competition.emblem,
        );

        const season = new Season(
          matchData.season.id,
          matchData.season.startDate,
          matchData.season.endDate,
          matchData.season.currentMatchday,
          matchData.season.winner,
        );

        const homeTeam = new Team(
          matchData.homeTeam.id,
          matchData.homeTeam.name,
          matchData.homeTeam.shortName,
          matchData.homeTeam.tla,
          matchData.homeTeam.crest,
        );

        const awayTeam = new Team(
          matchData.awayTeam.id,
          matchData.awayTeam.name,
          matchData.awayTeam.shortName,
          matchData.awayTeam.tla,
          matchData.awayTeam.crest,
        );

        const score = new Score(
          matchData.score.winner,
          matchData.score.duration,
          matchData.score.fullTime,
          matchData.score.halfTime,
        );

        return new Match(
          area,
          competition,
          season,
          matchData.id,
          matchData.utcDate,
          matchData.status,
          matchData.matchday,
          matchData.stage,
          matchData.group,
          matchData.lastUpdated,
          homeTeam,
          awayTeam,
          score,
          matchData.odds,
          matchData.referees,
        );
      });

      return matches;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getMatchesByTeam(teamId: string): Promise<Match[]> {
    const url = `${this.apiUrl}/teams/${teamId}/matches`;
    const headers = {
      'X-Auth-Token': this.apiKey,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers }).pipe(
          catchError((err) => {
            if (err.response && err.response.status === 500) {
              throw new HttpException(
                'Internal server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            } else if (err.response && err.response.status === 400) {
              throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            } else if (err.response && err.response.status === 404) {
              throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
            } else {
              throw new HttpException(
                err.message,
                err.response
                  ? err.response.status
                  : HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }
          }),
        ),
      );

      const matches: Match[] = response.data.matches.map((matchData) => {
        const area = new Area(
          matchData.area.id,
          matchData.area.name,
          matchData.area.code,
          matchData.area.flag,
        );

        const competition = new Competition(
          matchData.competition.id,
          matchData.competition.name,
          matchData.competition.code,
          matchData.competition.type,
          matchData.competition.emblem,
        );

        const season = new Season(
          matchData.season.id,
          matchData.season.startDate,
          matchData.season.endDate,
          matchData.season.currentMatchday,
          matchData.season.winner,
        );

        const homeTeam = new Team(
          matchData.homeTeam.id,
          matchData.homeTeam.name,
          matchData.homeTeam.shortName,
          matchData.homeTeam.tla,
          matchData.homeTeam.crest,
        );

        const awayTeam = new Team(
          matchData.awayTeam.id,
          matchData.awayTeam.name,
          matchData.awayTeam.shortName,
          matchData.awayTeam.tla,
          matchData.awayTeam.crest,
        );

        const score = new Score(
          matchData.score.winner,
          matchData.score.duration,
          matchData.score.fullTime,
          matchData.score.halfTime,
        );

        return new Match(
          area,
          competition,
          season,
          matchData.id,
          matchData.utcDate,
          matchData.status,
          matchData.matchday,
          matchData.stage,
          matchData.group,
          matchData.lastUpdated,
          homeTeam,
          awayTeam,
          score,
          matchData.odds,
          matchData.referees,
        );
      });

      return matches;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
