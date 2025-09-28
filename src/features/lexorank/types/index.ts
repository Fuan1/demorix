// LexoRankBucket is a number type (0, 1, or 2)
export type LexoRankBucket = 0 | 1 | 2;

/**
 * Base interface for items that can be ordered using LexoRank
 */
export type LexoRankItem = {
  id: string | number;
  rank: string;
};


export type SortableConfig<T> = {
  getRank: (item: T) => string;
  setRank: (item: T, rank: string) => T;
};
