import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Simple component to profile
const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Simplified stats context (without using the library)
const ProfilerContext = React.createContext({});

const ProfilerProvider = ({ children }) => {
  const [stats, setStats] = useState({});
  
  return (
    <ProfilerContext.Provider value={{ stats, setStats }}>
      {children}
    </ProfilerContext.Provider>
  );
};

// Demo dashboard component
const DemoDashboard = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 20, 
      right: 20,
      background: '#1e293b',
      padding: 20,
      borderRadius: 8,
      color: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
    }}>
      <h3>React Perfy Demo</h3>
      <p>This is a simplified example without the full library integration</p>
      <p>The actual library provides:</p>
      <ul>
        <li>Real-time performance monitoring</li>
        <li>Component render stats</li>
        <li>AI optimization suggestions</li>
      </ul>
    </div>
  );
};

// Main app
const App = () => {
  return (
    <ProfilerProvider>
      <div style={{ padding: '20px' }}>
        <h1>React Perfy Demo (Simplified)</h1>
        <p>Check out the full library features by integrating react-perfy properly</p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Counter initialCount={0} />
          <Counter initialCount={10} />
          <Counter initialCount={100} />
        </div>
        
        <DemoDashboard />
      </div>
    </ProfilerProvider>
  );
};

// Render the app using React 18's createRoot API
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 