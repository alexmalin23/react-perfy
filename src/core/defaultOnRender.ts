export function defaultOnRender(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _startTime: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _commitTime: number
) {
  console.debug(
    `[Profiler] ${id} (${phase}) took ${actualDuration.toFixed(2)}ms ` +
    `(baseline: ${baseDuration.toFixed(2)}ms)`
  );
} 