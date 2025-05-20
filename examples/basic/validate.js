// Simple validation script to check that the package exports work correctly
const reactPerfy = require('../../dist/index.cjs.js');

console.log('Package exports the following:');
console.log(Object.keys(reactPerfy));

// Verify key exports
const requiredExports = [
  'withProfiler',
  'defaultOnRender',
  'ProfilerStatsProvider',
  'useProfilerStats',
  'ProfilerDashboard',
  'PerfyAgentProvider',
  'usePerfyAgentConfig',
  'analyzeWithAI'
];

const missingExports = requiredExports.filter(exp => !reactPerfy[exp]);

if (missingExports.length) {
  console.error(`Missing required exports: ${missingExports.join(', ')}`);
  process.exit(1);
} else {
  console.log('All required exports are available!');
} 