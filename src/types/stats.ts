export type RenderStats = {
  id: string;
  count: number;
  totalDuration: number;
  maxDuration: number;
  avgDuration: number;
  lastPhase: 'mount' | 'update';
}; 