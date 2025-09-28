import { LEXORANK_CONTENT } from '../../constants/content';

const { structure } = LEXORANK_CONTENT;

const StructureSection = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-50 p-4 rounded-lg border">
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-white border border-slate-300 rounded font-mono text-sm">
            <span className="px-2 py-1 bg-slate-100 text-slate-700">0</span>
            <span className="px-1 text-slate-400">|</span>
            <span className="px-2 py-1 bg-slate-100 text-slate-700">100000</span>
            <span className="px-1 text-slate-400">:</span>
          </div>
        </div>
        <div className="text-center text-sm text-slate-600 space-y-1">
          <div>{structure.bucketLabel}</div>
          <div className="text-xs text-slate-500">{structure.example}</div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-3">{structure.middleValueTitle}</h4>

        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="px-2 py-1 bg-white rounded border font-mono text-sm">"a"</div>
            <span className="text-slate-500">+</span>
            <div className="px-2 py-1 bg-white rounded border font-mono text-sm">"c"</div>
            <span className="text-slate-500">→</span>
            <div className="px-2 py-1 bg-blue-100 rounded border font-mono text-sm font-bold">"b"</div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="px-2 py-1 bg-white rounded border font-mono text-sm">"a"</div>
            <span className="text-slate-500">+</span>
            <div className="px-2 py-1 bg-white rounded border font-mono text-sm">"b"</div>
            <span className="text-slate-500">→</span>
            <div className="px-2 py-1 bg-blue-100 rounded border font-mono text-sm font-bold">"ab"</div>
          </div>

          <div className="text-center text-sm text-slate-600 mt-3">
            {structure.middleValueDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureSection;