'use client';

import { DemoLayout, DemoSection } from '@/components/demo';

import { initialDemoItems } from '../constants/initialData';
import { useDragAndDrop } from '../hooks';

import { LexoRankItem } from '../types';
import DraggableItem from './DraggableItem';
import LexoRankControls from './LexoRankControls';
import BucketsSection from './sections/BucketsSection';
import IntroSection from './sections/IntroSection';
import OperationsSection from './sections/OperationsSection';
import RebalancingSection from './sections/RebalancingSection';
import StructureSection from './sections/StructureSection';

const LexoRankDemo = () => {
  const { DndContext, SortableContext, items, handleDragEnd, addItem, handleRebalance } = useDragAndDrop<LexoRankItem>({
    initialItems: initialDemoItems,
    config: {
      getRank: item => item.rank,
      setRank: (item, rank) => ({ ...item, rank }),
    },
  });

  return (
    <DemoLayout
      title="LexoRank Demo"
      description="Professional implementation of LexoRank algorithm with drag-and-drop functionality, metrics monitoring, and automatic rebalancing."
    >
      <div className="space-y-8">
        <DemoSection title="1. Why Use LexoRank?">
          <IntroSection />
        </DemoSection>
        <DemoSection title="2. LexoRank Structure and Principles">
          <StructureSection />
        </DemoSection>
        <DemoSection title="3. Core Operations">
          <OperationsSection />
        </DemoSection>
        <DemoSection title="4. Understanding the Bucket System">
          <BucketsSection />
        </DemoSection>
        <DemoSection title="5. Rebalancing: Performance Optimization">
          <RebalancingSection />
        </DemoSection>

        <LexoRankControls onAddItem={addItem} handleRebalance={handleRebalance} />

        <DemoSection title="Simulator">
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={items.map(item => String(item.id))}>
              <div className="space-y-3">
                {items.map(item => (
                  <DraggableItem key={item.id} item={item} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </DemoSection>
      </div>
    </DemoLayout>
  );
};

export default LexoRankDemo;
