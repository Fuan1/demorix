import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';

import { useEffect, useState } from 'react';
import type { LexoRankItem, SortableConfig } from '../types';
import { calculateInsertRank, calculateMoveRank, isRebalanceNeeded, rebalanceRanks } from '../utils';

type UseDragAndDropProps<T> = {
  initialItems: T[];
  config: SortableConfig<T>;
};

export const useDragAndDrop = <T extends LexoRankItem>({ initialItems, config }: UseDragAndDropProps<T>) => {
  const [items, setItems] = useState<T[]>(initialItems);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const addItem = () => {
    const rank = calculateInsertRank(items);
    const itemWithRank = { id: `demo-${items.length + 1}`, rank } as T;
    setItems(prev => [...prev, itemWithRank]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(item => item.id === active.id);
    const newIndex = items.findIndex(item => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return null;

    const newItems = arrayMove(items, oldIndex, newIndex);
    const newRank = calculateMoveRank(newItems, newIndex);

    const updatedItem = config.setRank(newItems[newIndex], newRank);
    newItems[newIndex] = updatedItem;

    setItems(newItems);

    return { item: updatedItem, newRank };
  };

  const handleRebalance = () => {
    const rebalancedItems = rebalanceRanks(items);
    console.log(rebalancedItems);
    setItems(rebalancedItems);
    return rebalancedItems;
  };

  const checkRebalanceNeeded = () => {
    return isRebalanceNeeded(items);
  };

  return {
    DndContext,
    SortableContext,
    items,
    handleDragEnd,
    addItem,
    handleRebalance,
    checkRebalanceNeeded,
  };
};
