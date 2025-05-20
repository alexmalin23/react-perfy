declare module 'react-perfy' {
  import React from 'react';
  
  export interface WithProfilerOptions {
    id?: string;
    onRender?: (id: string, phase: 'mount' | 'update', actualDuration: number) => void;
    enabled?: boolean;
  }

  export interface RenderStats {
    id: string;
    count: number;
    totalDuration: number;
    maxDuration: number;
    avgDuration: number;
    lastPhase: 'mount' | 'update';
  }

  export interface ProfilerStatsContextType {
    stats: Record<string, RenderStats>;
    setStats: React.Dispatch<React.SetStateAction<Record<string, RenderStats>>>;
    addRender: (entry: {
      id: string;
      phase: 'mount' | 'update';
      duration: number;
    }) => void;
  }

  export interface PerfyAgentConfig {
    enabled: boolean;
    apiKey?: string;
    model?: string;
    sendSourceCode: boolean;
  }

  export function withProfiler<P>(
    WrappedComponent: React.ComponentType<P>,
    options?: WithProfilerOptions
  ): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<unknown>>;

  export function defaultOnRender(
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ): void;

  export const ProfilerStatsProvider: React.FC<{children: React.ReactNode}>;
  export function useProfilerStats(): ProfilerStatsContextType;
  
  export const ProfilerDashboard: React.FC;
  
  export const PerfyAgentProvider: React.FC<{
    children: React.ReactNode;
    config: PerfyAgentConfig;
  }>;
  export function usePerfyAgentConfig(): PerfyAgentConfig;
  
  export function analyzeWithAI(
    stats: Record<string, RenderStats>,
    sourceCode?: string,
    config?: PerfyAgentConfig
  ): Promise<{suggestions: string[]} | null>;
} 