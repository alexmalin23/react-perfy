import React, { useState } from 'react';
import { useProfilerStats } from '../stats/ProfilerStatsContext';
import { usePerfyAgentConfig } from '../ai/PerfyAgentConfigContext';
import { analyzeWithAI } from '../ai/analyzeWithAI';
import { RenderStats } from '../types/stats';
import styles from './ProfilerDashboard.styles';

type Toast = {
  message: string;
  onClose: () => void;
};

const Toast: React.FC<Toast> = ({ message, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3400);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div style={styles.toast as React.CSSProperties}>
      {message}
    </div>
  );
};

export const ProfilerDashboard: React.FC = () => {
  const { stats, setStats } = useProfilerStats();
  const config = usePerfyAgentConfig();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleAnalyze = async (id: string, componentStats: RenderStats) => {
    setLoadingId(id);
    try {
      const statsObj = { [id]: componentStats }; 
      const result = await analyzeWithAI(statsObj, undefined, config);
      if (result && result.suggestions) {
        setToast(`AI for ${id}:\n${result.suggestions.join('\n')}`);
      }
    } catch (error) {
      console.error('Failed to analyze:', error);
      setToast('Failed to analyze.');
    } finally {
      setLoadingId(null);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all stats?')) setStats({});
  };

  if (minimized) {
    return (
      <button 
        style={styles.minimizedBtn as React.CSSProperties} 
        onClick={() => setMinimized(false)} 
        title="Show Profiler Dashboard"
      >
        ⚡️ perfy
      </button>
    );
  }

  return (
    <>
      <div style={styles.overlay as React.CSSProperties}>
        <div style={styles.header as React.CSSProperties}>
          <span>
            <b>react-perfy</b> <span style={{ opacity: 0.6, fontSize: 12 }}>dashboard</span>
          </span>
          <div>
            <button style={styles.resetBtn as React.CSSProperties} title="Reset statistics" onClick={handleReset}>Reset</button>
            <button style={styles.resetBtn as React.CSSProperties} title="Minimize" onClick={() => setMinimized(true)}>─</button>
          </div>
        </div>
        {Object.values(stats).length === 0 && (
          <div style={styles.empty as React.CSSProperties}>
            No component render data yet.<br />
            <span style={{ fontSize: 11 }}>Wrap components with <code>withProfiler()</code> to begin measuring.</span>
          </div>
        )}
        {Object.values(stats).map((s: RenderStats) => (
          <div key={s.id} style={styles.card as React.CSSProperties}>
            <div style={styles.title as React.CSSProperties}>{s.id}</div>
            <div style={styles.statLine as React.CSSProperties}>Renders: <b>{s.count}</b></div>
            <div style={styles.statLine as React.CSSProperties}>Average: <b>{s.avgDuration.toFixed(1)}ms</b></div>
            <div style={styles.statLine as React.CSSProperties}>Max: <b>{s.maxDuration.toFixed(1)}ms</b></div>
            <button
              style={styles.aiBtn(true) as React.CSSProperties}
              disabled={loadingId === s.id}
              onClick={() => handleAnalyze(s.id, s)}
              title="Get AI optimization tips"
            >
              {loadingId === s.id ? 'Analyzing...' : 'AI Suggestion'}
            </button>
          </div>
        ))}
      </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}; 