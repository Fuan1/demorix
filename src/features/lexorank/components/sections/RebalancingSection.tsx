import { LEXORANK_CONTENT } from '../../constants/content';

const { rebalancing } = LEXORANK_CONTENT;

const StepCard = ({
  step,
  index
}: {
  step: typeof rebalancing.steps[0];
  index: number;
}) => (
  <div className="bg-white p-3 rounded border">
    <div className="text-sm font-medium mb-2 text-slate-700">{step.title}</div>
    <div className="flex gap-2 flex-wrap text-xs font-mono">
      {step.items.map((item, idx) => (
        <div
          key={idx}
          className={`px-2 py-1 rounded ${
            index === 2 ? 'bg-slate-300' : 'bg-slate-100'
          }`}
        >
          {item}
        </div>
      ))}
      {index === 2 && <span className="text-slate-500 self-center">...</span>}
    </div>
    {step.note && (
      <div className="text-xs text-slate-600 mt-2 p-2 bg-slate-100 rounded">{step.note}</div>
    )}
  </div>
);

const RebalancingComparison = () => (
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded border">
      <h5 className="font-semibold text-sm mb-3 text-slate-700">{rebalancing.beforeTitle}</h5>
      <div className="space-y-2">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded text-xs flex items-center justify-center">
              {num}
            </div>
            <div className="px-2 py-1 bg-slate-100 rounded border text-xs font-mono">
              "0|10000{num - 1}:"
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-slate-600 mt-3 p-2 bg-slate-100 rounded">
        {rebalancing.beforeNote}
      </div>
    </div>

    <div className="bg-white p-4 rounded border">
      <h5 className="font-semibold text-sm mb-3 text-slate-700">{rebalancing.afterTitle}</h5>
      <div className="space-y-2">
        {[
          { bucket: 0, rank: '0|100000:' },
          { bucket: 1, rank: '1|100000:' },
          { bucket: 2, rank: '2|100000:' },
          { bucket: 0, rank: '0|200000:' }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-600 text-white rounded text-xs flex items-center justify-center">
              {index + 1}
            </div>
            <div className="px-2 py-1 bg-slate-100 rounded border text-xs font-mono">
              {item.rank}
            </div>
            <div className="px-1 py-0.5 bg-slate-200 rounded text-xs">B{item.bucket}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-slate-600 mt-3 p-2 bg-slate-100 rounded">
        {rebalancing.afterNote}
      </div>
    </div>
  </div>
);

const RebalancingSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-600 mb-4">{rebalancing.description}</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-4">{rebalancing.excessiveGrowthTitle}</h4>
        <div className="space-y-4">
          {rebalancing.steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-4">{rebalancing.solutionTitle}</h4>
        <div className="space-y-4">
          <div className="text-sm text-slate-600">{rebalancing.solutionDescription}</div>
          <RebalancingComparison />
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-3">{rebalancing.whenToUseTitle}</h4>
        <div className="space-y-2 text-sm text-slate-600">
          {rebalancing.guidelines.map((guideline, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span>{guideline}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RebalancingSection;