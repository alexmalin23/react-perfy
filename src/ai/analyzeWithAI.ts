import { RenderStats } from '../types/stats';

interface PerfyAgentConfig {
  enabled: boolean;
  apiKey?: string;
  model?: string;
  sendSourceCode?: boolean;
}

export const analyzeWithAI = async (
  stats: Record<string, RenderStats>,
  sourceCode?: string,
  config: PerfyAgentConfig = { enabled: false }
) => {
  if (!config.enabled || !config.apiKey) {
    console.warn('AI analysis is disabled or API key is missing');
    return null;
  }

  try {
    const apiKey = config.apiKey;
    const model = config.model || 'gpt-4';
    
    // This would normally make an API call to OpenAI
    // For now we just return a mock response
    console.log(`Would analyze with ${model} using API key: ${apiKey.substring(0, 3)}...`);
    
    return {
      suggestions: [
        `Components that render frequently: ${Object.values(stats)
          .filter(s => s.count > 5)
          .map(s => s.id)
          .join(', ')}`,
        'Consider memoizing components with high render counts',
        'Use React.memo for pure components',
        'Check for props changes that might trigger unnecessary renders'
      ]
    };
  } catch (err) {
    console.error('Failed to analyze with AI:', err);
    return null;
  }
}; 