import { LexoRank } from 'lexorank';

import type { LexoRankBucket, LexoRankItem } from '../types';

export const calculateInsertRank = <T extends LexoRankItem>(items: T[]) => {
  if (items.length === 0) return LexoRank.middle().toString();
  const lastRank = LexoRank.parse(items[items.length - 1].rank);
  return lastRank.genNext().toString();
};

export const calculateMoveRank = <T extends LexoRankItem>(items: T[], newIndex: number) => {
  const prevItem = newIndex > 0 ? items[newIndex - 1].rank : null;
  const nextItem = newIndex < items.length - 1 ? items[newIndex + 1].rank : null;

  const prev = prevItem ? LexoRank.parse(prevItem) : null;
  const next = nextItem ? LexoRank.parse(nextItem) : null;

  if (!prev && !next) return LexoRank.middle().toString();

  if (prev && !next) return prev.genNext().toString();
  if (!prev && next) return next.genPrev().toString();
  return prev!.between(next!).toString();
};

/**
 * Extract bucket number from rank string
 */
export const getBucketFromRank = (rank: string): LexoRankBucket => {
  const bucketMatch = rank.match(/^(\d)\|/);
  const parsed = bucketMatch ? parseInt(bucketMatch[1]) : 0;
  return (parsed >= 0 && parsed <= 2 ? parsed : 0) as LexoRankBucket;
};

/**
 * Check if rebalancing is needed based on rank length
 */
export const isRebalanceNeeded = <T extends LexoRankItem>(items: T[], maxLength: number = 50): boolean => {
  return items.some(item => item.rank.length > maxLength);
};

/**
 * Rebalance ranks by redistributing items evenly from middle
 */
export const rebalanceRanks = <T extends LexoRankItem>(items: T[]): T[] => {
  return items.map((item, index) => {
    let newRank = LexoRank.middle();

    for (let i = 0; i < index; i++) {
      newRank = newRank.genNext();
    }

    return { ...item, rank: newRank.toString() };
  });
};
