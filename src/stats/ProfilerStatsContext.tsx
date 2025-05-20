import React, { createContext, useContext, useState } from 'react';
import { RenderStats } from '../types/stats';

type ProfilerStatsContextType = {
  stats: Record<string, RenderStats>;
  setStats: React.Dispatch<React.SetStateAction<Record<string, RenderStats>>>;
  addRender: (entry: {
    id: string;
    phase: 'mount' | 'update';
    duration: number;
  }) => void;
};

const ProfilerStatsContext = createContext<ProfilerStatsContextType | null>(null);

export const ProfilerStatsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<Record<string, RenderStats>>({});

  const addRender = ({ id, phase, duration }) => {
    setStats(prev => {
      const existing = prev[id] || {
        id,
        count: 0,
        totalDuration: 0,
        maxDuration: 0,
        avgDuration: 0,
        lastPhase: phase,
      };
      const count = existing.count + 1;
      const totalDuration = existing.totalDuration + duration;
      const maxDuration = Math.max(existing.maxDuration, duration);
      const avgDuration = totalDuration / count;

      return {
        ...prev,
        [id]: {
          ...existing,
          count,
          totalDuration,
          maxDuration,
          avgDuration,
          lastPhase: phase,
        }
      };
    });
  };

  return (
    <ProfilerStatsContext.Provider value={{ stats, setStats, addRender }}>
      {children}
    </ProfilerStatsContext.Provider>
  );
};

export const useProfilerStats = () => {
  const context = useContext(ProfilerStatsContext);
  if (!context) throw new Error("useProfilerStats must be used within ProfilerStatsProvider");
  return context;
}; 