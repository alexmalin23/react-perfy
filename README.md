# react-perfy

A real-time React performance profiler with a beautiful dashboard and AI-powered optimization suggestions.

[![npm version](https://img.shields.io/npm/v/react-perfy.svg)](https://www.npmjs.com/package/react-perfy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🔍 **Real-time component render profiling** - Track render times and frequencies
- 📊 **Beautiful performance dashboard** - Visualize render statistics with an intuitive UI
- 🤖 **AI-powered optimization suggestions** - Get smart recommendations for performance improvements
- 🎯 **Zero-config setup** - Just wrap components and add the dashboard
- 🚀 **Development mode only** - No impact on production builds

<img src="https://via.placeholder.com/800x400.png?text=React+Perfy+Dashboard" alt="React Perfy Dashboard" width="800" />

## Installation

```bash
npm install react-perfy
# or
yarn add react-perfy
# or
pnpm add react-perfy
```

## Quick Start

1. Wrap your app with the providers:

```tsx
import { ProfilerStatsProvider, PerfyAgentProvider } from 'react-perfy';

function App() {
  return (
    <ProfilerStatsProvider>
      <PerfyAgentProvider>
        <YourApp />
      </PerfyAgentProvider>
    </ProfilerStatsProvider>
  );
}
```

2. Wrap components you want to profile:

```tsx
import { withProfiler } from 'react-perfy';

const MyComponent = () => {
  return <div>Hello World</div>;
};

export default withProfiler(MyComponent);
```

3. Add the dashboard to your app:

```tsx
import { ProfilerDashboard } from 'react-perfy';

function App() {
  return (
    <>
      <YourApp />
      <ProfilerDashboard />
    </>
  );
}
```

## API Reference

### `withProfiler(Component, options?)`

Wraps a component with React's Profiler to measure render performance.

```tsx
withProfiler(MyComponent, {
  id: 'CustomName', // Optional custom ID
  onRender: customRenderCallback, // Optional custom render callback
  enabled: true, // Optional flag to enable/disable profiling
});
```

### `ProfilerStatsProvider`

Context provider for render statistics. Must wrap your application.

```tsx
<ProfilerStatsProvider>
  <YourApp />
</ProfilerStatsProvider>
```

### `useProfilerStats()`

Hook to access profiler statistics in your components.

```tsx
const { stats } = useProfilerStats();
```

### `PerfyAgentProvider`

Context provider for AI agent configuration.

```tsx
<PerfyAgentProvider config={{
  enabled: true, // Enable/disable AI features
  apiKey: 'your-openai-key', // OpenAI API key
  model: 'gpt-4', // Model to use (optional, defaults to 'gpt-4')
  sendSourceCode: true, // Whether to include source code in AI analysis
}}>
  <YourApp />
</PerfyAgentProvider>
```

### `ProfilerDashboard`

The performance dashboard component.

```tsx
<ProfilerDashboard />
```

### `analyzeWithAI(stats, sourceCode?)`

Function to get AI-powered optimization suggestions.

```tsx
const { stats } = useProfilerStats();
const suggestions = await analyzeWithAI(stats);
```

## Examples

See the [examples](./examples) directory for working examples:

- [Basic usage](./examples/basic)
- [Advanced configuration](./examples/advanced)
- [Next.js integration](./examples/nextjs)

## Contributing

Contributions are welcome! Please see our [Contributing Guide](./CONTRIBUTING.md) for more details.

## License

MIT 