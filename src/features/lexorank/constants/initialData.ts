import { LexoRank } from 'lexorank';
import type { LexoRankItem } from '../types';

// Generate initial demo items with proper LexoRank spacing
export const createInitialDemoItems = (): LexoRankItem[] => {
  const baseRank = LexoRank.middle();

  return [
    {
      id: 'demo-1',
      rank: baseRank.toString(),
    },
    {
      id: 'demo-2',
      rank: baseRank.genNext().toString(),
    },
    {
      id: 'demo-3',
      rank: baseRank.genNext().genNext().toString(),
    },
    {
      id: 'demo-4',
      rank: baseRank.genNext().genNext().genNext().toString(),
    },
  ];
};

export const MAX_SAFE_RANK_LENGTH = 12;

// For backward compatibility with existing code
export const initialDemoItems = createInitialDemoItems();
