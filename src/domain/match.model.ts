import { Area } from './area.model';
import { Competition } from './competition.model';
import { Season } from './season.model';
import { Team } from './team.model';
import { Score } from './score.model';

export class Match {
  private area: Area;
  private competition: Competition;
  private season: Season;
  private id: number;
  private utcDate: string;
  private status: string;
  private matchday: number;
  private stage: string;
  private group: string;
  private lastUpdated: string;
  private homeTeam: Team;
  private awayTeam: Team;
  private score: Score;
  private odds: any;
  private referees: any[];

  constructor(
    area: Area,
    competition: Competition,
    season: Season,
    id: number,
    utcDate: string,
    status: string,
    matchday: number,
    stage: string,
    group: string,
    lastUpdated: string,
    homeTeam: Team,
    awayTeam: Team,
    score: Score,
    odds: any,
    referees: any[],
  ) {
    this.area = area;
    this.competition = competition;
    this.season = season;
    this.id = id;
    this.utcDate = utcDate;
    this.status = status;
    this.matchday = matchday;
    this.stage = stage;
    this.group = group;
    this.lastUpdated = lastUpdated;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.score = score;
    this.odds = odds;
    this.referees = referees;
  }

  // Getters
  public getArea(): Area {
    return this.area;
  }

  public getCompetition(): Competition {
    return this.competition;
  }

  public getSeason(): Season {
    return this.season;
  }

  public getId(): number {
    return this.id;
  }

  public getUtcDate(): string {
    return this.utcDate;
  }

  public getStatus(): string {
    return this.status;
  }

  public getMatchday(): number {
    return this.matchday;
  }

  public getStage(): string {
    return this.stage;
  }

  public getGroup(): string {
    return this.group;
  }

  public getLastUpdated(): string {
    return this.lastUpdated;
  }

  public getHomeTeam(): Team {
    return this.homeTeam;
  }

  public getAwayTeam(): Team {
    return this.awayTeam;
  }

  public getScore(): Score {
    return this.score;
  }

  public getOdds(): any {
    return this.odds;
  }

  public getReferees(): any[] {
    return this.referees;
  }

  // Setters
  public setArea(area: Area): void {
    this.area = area;
  }

  public setCompetition(competition: Competition): void {
    this.competition = competition;
  }

  public setSeason(season: Season): void {
    this.season = season;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setUtcDate(utcDate: string): void {
    this.utcDate = utcDate;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public setMatchday(matchday: number): void {
    this.matchday = matchday;
  }

  public setStage(stage: string): void {
    this.stage = stage;
  }

  public setGroup(group: string): void {
    this.group = group;
  }

  public setLastUpdated(lastUpdated: string): void {
    this.lastUpdated = lastUpdated;
  }

  public setHomeTeam(homeTeam: Team): void {
    this.homeTeam = homeTeam;
  }

  public setAwayTeam(awayTeam: Team): void {
    this.awayTeam = awayTeam;
  }

  public setScore(score: Score): void {
    this.score = score;
  }

  public setOdds(odds: any): void {
    this.odds = odds;
  }

  public setReferees(referees: any[]): void {
    this.referees = referees;
  }
}
