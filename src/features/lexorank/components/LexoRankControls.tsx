import { Plus, RotateCw } from 'lucide-react';

import { DemoSection } from '@/components/demo';
import { Button } from '@/components/ui/button';

type LexoRankControlsProps = {
  onAddItem: () => void;
  handleRebalance: () => void;
};

const LexoRankControls = ({ onAddItem, handleRebalance }: LexoRankControlsProps) => {
  return (
    <div className="space-y-6">
      <DemoSection title="Controls">
        <div className="flex flex-row gap-3">
          <Button onClick={onAddItem}>
            <Plus className="w-4 h-4" />
            Add Item
          </Button>

          <Button onClick={handleRebalance} className="bg-amber-500 hover:bg-amber-600">
            <RotateCw className="w-4 h-4" />
            Rebalncing
          </Button>
        </div>
      </DemoSection>
    </div>
  );
};

export default LexoRankControls;
