import React, { useState } from 'react';
import {
  withProfiler,
  ProfilerStatsProvider,
  ProfilerDashboard,
  PerfyAgentProvider
} from 'react-perfy';

// Basic component to profile
const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

// Wrap with Profiler
const ProfiledCounter = withProfiler(Counter, { 
  id: 'Counter' 
});

// Create multiple instances to demonstrate various stats
const App = () => {
  return (
    <ProfilerStatsProvider>
      <PerfyAgentProvider config={{ enabled: true, sendSourceCode: false }}>
        <div style={{ padding: '20px' }}>
          <h1>React Perfy Demo</h1>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <ProfiledCounter initialCount={0} />
            <ProfiledCounter initialCount={10} />
            <ProfiledCounter initialCount={100} />
          </div>
          
          {/* Dashboard displays at the bottom */}
          <ProfilerDashboard />
        </div>
      </PerfyAgentProvider>
    </ProfilerStatsProvider>
  );
};

export default App; 