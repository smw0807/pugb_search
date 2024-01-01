import { IGameRankStats, IGameStats } from '@/types';
export const rankStatData: IGameRankStats = {
  currentRankPoint: 0,
  bestRankPoint: 0,
  currentTier: { tier: '-', subTier: '' },
  bestTier: { tier: '-', subTier: '' },
  roundsPlayed: 0,
  avgRank: 0,
  top10Ratio: 0,
  winRatio: 0,
  assists: 0,
  wins: 0,
  kda: 0,
  kills: 0,
  deaths: 0,
  damageDealt: 0,
  dBNOs: 0,
};

export const normalStatData: IGameStats = {
  assists: 0,
  boosts: 0,
  dBNOs: 0,
  dailyKills: 0,
  damageDealt: 0,
  days: 0,
  dailyWins: 0,
  headshotKills: 0,
  heals: 0,
  kills: 0,
  longestKill: 0,
  longestTimeSurvived: 0,
  losses: 0,
  maxKillStreaks: 0,
  mostSurvivalTime: 0,
  revives: 0,
  rideDistance: 0,
  roadKills: 0,
  roundMostKills: 0,
  roundsPlayed: 0,
  suicides: 0,
  swimDistance: 0,
  teamKills: 0,
  timeSurvived: 0,
  top10s: 0,
  vehicleDestroys: 0,
  walkDistance: 0,
  weaponsAcquired: 0,
  weeklyKills: 0,
  weeklyWins: 0,
  wins: 0,
};
