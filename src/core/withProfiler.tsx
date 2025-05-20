import React, { Profiler, forwardRef } from 'react';
import { WithProfilerOptions } from '../types/profiler';
import { defaultOnRender } from './defaultOnRender';
import { useProfilerStats } from '../stats/ProfilerStatsContext';

export function withProfiler<P>(
  WrappedComponent: React.ComponentType<P>,
  options: WithProfilerOptions = {}
) {
  const {
    id = WrappedComponent.displayName || WrappedComponent.name || 'Component',
    onRender = defaultOnRender,
    enabled = true
  } = options;

  const ProfiledComponent = forwardRef<unknown, P>((props, ref) => {
    const { addRender } = useProfilerStats();

    const handleRender = (
      id: string,
      phase: 'mount' | 'update',
      actualDuration: number
    ) => {
      addRender({ id, phase, duration: actualDuration });
      onRender(id, phase, actualDuration);
    };

    return enabled ? (
      <Profiler id={id} onRender={handleRender}>
        <WrappedComponent {...props} ref={ref} />
      </Profiler>
    ) : (
      <WrappedComponent {...props} ref={ref} />
    );
  });

  ProfiledComponent.displayName = `WithProfiler(${id})`;
  return ProfiledComponent;
} 