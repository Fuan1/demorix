import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { LexoRankItem } from '../types';
import { getBucketFromRank } from '../utils';

type DraggableItemProps<T extends LexoRankItem> = {
  item: T;
};

const DraggableItem = <T extends LexoRankItem>({ item }: DraggableItemProps<T>) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
  const bucket = getBucketFromRank(item.rank);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className="flex flex-row border p-2 rounded-sm gap-2 select-none">
        <div
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing"
          {...listeners}
        >
          <GripVertical className="w-3 h-3" />
        </div>
        <p className="text-sm font-semibold">{String(item.id)}</p>
        <Badge variant="secondary" className="text-xs font-mono">
          {item.rank}
        </Badge>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div>
              Bucket: <code className="bg-muted px-1 rounded text-xs">{bucket}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableItem;
