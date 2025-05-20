import { ProfilerOnRenderCallback } from 'react';

export type WithProfilerOptions = {
  id?: string;
  onRender?: ProfilerOnRenderCallback;
  enabled?: boolean;
}; 