import { LEXORANK_CONTENT } from '../../constants/content';

const { intro, todoExample, lexorankExample } = LEXORANK_CONTENT;

const IntroSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-4">{intro.problemTitle}</h4>
        <p className="mb-4">{intro.description}</p>

        <div className="bg-slate-50 p-4 rounded-lg border">
          <h5 className="text-sm font-medium mb-3 text-slate-600">
            {intro.initialStateTitle}
          </h5>
          <div className="flex flex-wrap gap-2">
            {todoExample.map(item => (
              <div
                key={item.name}
                className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300"
              >
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-slate-500">
                  index: {item.index}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="my-4">Let's move Cooking between Cleaning and Grocery Shopping:</p>

        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
          <h5 className="text-sm font-medium mb-3 text-red-700">
            {intro.problemVisualizationTitle}
          </h5>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300">
                <div className="text-sm font-medium">Cleaning</div>
                <div className="text-xs text-slate-500">index: 0 → 0 (no change)</div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-red-100 border-red-400 animate-pulse">
                <div className="text-sm font-medium">Cooking</div>
                <div className="text-xs text-red-600 font-bold">index: 4 → 1</div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-red-100 border-red-400 animate-pulse">
                <div className="text-sm font-medium">Grocery Shopping</div>
                <div className="text-xs text-red-600 font-bold">index: 1 → 2</div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-red-100 border-red-400 animate-pulse">
                <div className="text-sm font-medium">Exercise</div>
                <div className="text-xs text-red-600 font-bold">index: 2 → 3</div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-red-100 border-red-400 animate-pulse">
                <div className="text-sm font-medium">Reading</div>
                <div className="text-xs text-red-600 font-bold">index: 3 → 4</div>
              </div>
            </div>
            <div className="text-sm text-red-600 bg-red-100 py-2 px-4 rounded">
              {intro.problemDescription}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">{intro.solutionTitle}</h4>
        <p className="mb-4">
          <strong>{intro.solutionDescription}</strong>
        </p>

        <div className="bg-emerald-50 p-4 rounded-lg border mb-4">
          <h5 className="text-sm font-medium mb-3 text-emerald-700">
            LexoRank Approach
          </h5>
          <div className="flex flex-wrap gap-2">
            {lexorankExample.map(item => (
              <div
                key={item.name}
                className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300"
              >
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-slate-500 font-mono">
                  rank: "{item.rank}"
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h5 className="text-sm font-medium mb-3 text-green-700">
            {intro.solutionVisualizationTitle}
          </h5>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300">
                <div className="text-sm font-medium">Cleaning</div>
                <div className="text-xs text-slate-500 font-mono">
                  rank: "a" (no change)
                </div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-green-100 border-green-400 ring-2 ring-green-400">
                <div className="text-sm font-medium">Exercise</div>
                <div className="text-xs text-green-600 font-bold font-mono">
                  rank: "e" → "b"
                </div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300">
                <div className="text-sm font-medium">Grocery Shopping</div>
                <div className="text-xs text-slate-500 font-mono">
                  rank: "c" (no change)
                </div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300">
                <div className="text-sm font-medium">Reading</div>
                <div className="text-xs text-slate-500 font-mono">
                  rank: "g" (no change)
                </div>
              </div>
              <div className="px-3 py-2 rounded border-2 bg-slate-50 border-slate-300">
                <div className="text-sm font-medium">Cooking</div>
                <div className="text-xs text-slate-500 font-mono">
                  rank: "i" (no change)
                </div>
              </div>
            </div>
            <div className="text-sm text-green-600 bg-green-100 p-2 rounded">
              {intro.solutionBenefit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;