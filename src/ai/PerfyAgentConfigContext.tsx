import React, { createContext, useContext } from 'react';

type PerfyAgentConfig = {
  enabled: boolean;
  sendSourceCode: boolean;
  apiKey?: string;
  model?: string;
};

const PerfyAgentContext = createContext<PerfyAgentConfig>({
  enabled: false,
  sendSourceCode: false,
});

export const PerfyAgentProvider: React.FC<{
  children: React.ReactNode;
  config: PerfyAgentConfig;
}> = ({ children, config }) => {
  return (
    <PerfyAgentContext.Provider value={config}>
      {children}
    </PerfyAgentContext.Provider>
  );
};

export const usePerfyAgentConfig = () => useContext(PerfyAgentContext); 