export { withProfiler } from './core/withProfiler';
export { defaultOnRender } from './core/defaultOnRender';

export { ProfilerStatsProvider, useProfilerStats } from './stats/ProfilerStatsContext';
export { ProfilerDashboard } from './ui/ProfilerDashboard';

export { PerfyAgentProvider, usePerfyAgentConfig } from './ai/PerfyAgentConfigContext';
export { analyzeWithAI } from './ai/analyzeWithAI';

export type { WithProfilerOptions } from './types/profiler';
export type { RenderStats } from './types/stats'; 