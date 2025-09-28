import { LEXORANK_CONTENT } from '../../constants/content';

const { operations } = LEXORANK_CONTENT;

const OperationCard = ({
  title,
  description,
  explanation,
  methodName
}: {
  title: string;
  description: string;
  explanation: string;
  methodName: string;
}) => (
  <div className="bg-slate-50 p-4 rounded-lg border">
    <h5 className="font-semibold mb-3">{title}</h5>
    <p className="text-sm mb-3 text-slate-600">{description}</p>
    <div className="bg-white p-3 rounded border">
      <div className="flex items-center gap-3">
        <div className="text-sm text-slate-500">Existing:</div>
        <div className="px-2 py-1 bg-slate-100 rounded font-mono text-sm">0|200000:</div>
        <span className="text-slate-400">→</span>
        <div className="text-sm font-mono text-slate-600">{methodName}</div>
        <span className="text-slate-400">→</span>
        <div className="px-2 py-1 bg-slate-200 rounded font-mono text-sm font-semibold">
          {methodName === '.genPrev()' ? '0|100000:' : '0|300000:'}
        </div>
      </div>
      <div className="text-xs text-slate-500 mt-2">{explanation}</div>
    </div>
  </div>
);

const BetweenOperation = () => (
  <div className="bg-slate-50 p-4 rounded-lg border">
    <h5 className="font-semibold mb-3">{operations.between.title}</h5>
    <p className="text-sm mb-3 text-slate-600">{operations.between.description}</p>
    <div className="bg-white p-3 rounded border">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">Prev:</span>
          <div className="px-2 py-1 bg-slate-100 rounded font-mono">0|100000:</div>
          <span className="text-slate-500">Next:</span>
          <div className="px-2 py-1 bg-slate-100 rounded font-mono">0|300000:</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm font-mono text-slate-600">Prev.between(Next)</div>
          <span className="text-slate-400">→</span>
          <div className="px-2 py-1 bg-slate-200 rounded font-mono text-sm font-semibold">0|200000:</div>
        </div>
      </div>
      <div className="text-xs text-slate-500 mt-2">{operations.between.explanation}</div>
    </div>
  </div>
);

const OperationsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-600 mb-4">{operations.description}</p>
      </div>

      <OperationCard
        title={operations.genPrev.title}
        description={operations.genPrev.description}
        explanation={operations.genPrev.explanation}
        methodName=".genPrev()"
      />

      <OperationCard
        title={operations.genNext.title}
        description={operations.genNext.description}
        explanation={operations.genNext.explanation}
        methodName=".genNext()"
      />

      <BetweenOperation />
    </div>
  );
};

export default OperationsSection;