import { LEXORANK_CONTENT } from '../../constants/content';

const { buckets } = LEXORANK_CONTENT;

const BucketsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-600 mb-4">{buckets.description}</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-3">{buckets.independentSpacesTitle}</h4>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[0, 1, 2].map(bucket => (
            <div key={bucket} className="bg-white p-3 rounded border text-center">
              <div className="font-mono text-sm font-semibold">Bucket {bucket}</div>
              <div className="font-mono text-xs text-slate-600 mt-1">"{bucket}|xxxxxx:"</div>
            </div>
          ))}
        </div>
        <div className="text-sm text-slate-600">{buckets.independentSpacesDescription}</div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-3">{buckets.whyNeededTitle}</h4>

        <div className="bg-white p-4 rounded border mb-4">
          <h5 className="font-medium mb-2 text-slate-700">{buckets.continuousInsertionTitle}</h5>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="font-mono text-xs space-y-1">
              {buckets.continuousInsertionSteps.map((step, index) => (
                <div key={index}>{step}</div>
              ))}
              <div className="text-slate-400">...</div>
            </div>
            <div className="text-sm mt-2 p-2 bg-slate-100 rounded">{buckets.precisionLimit}</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded border">
          <h5 className="font-medium mb-2 text-slate-700">{buckets.bucketRotationTitle}</h5>
          <div className="space-y-2 text-sm text-slate-600">
            <div>{buckets.bucketRotationDescription}</div>
            <div className="font-mono text-xs bg-slate-50 p-2 rounded space-y-1">
              {buckets.bucketRotationSteps.map((step, index) => (
                <div key={index}>{step}</div>
              ))}
            </div>
            <div className="text-sm mt-2 p-2 bg-slate-100 rounded">{buckets.optimization}</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold mb-3">{buckets.sortOrderTitle}</h4>
        <div className="bg-white p-3 rounded border">
          <div className="text-sm text-slate-600 mb-2">{buckets.sortOrderDescription}</div>
          <div className="font-mono text-sm space-y-1">
            <div>{buckets.sortOrderExample}</div>
          </div>
          <div className="text-xs text-slate-500 mt-2">{buckets.sortOrderExplanation}</div>
        </div>
      </div>
    </div>
  );
};

export default BucketsSection;