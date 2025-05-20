const path = require('path');

module.exports = {
  resolve: {
    alias: {
      // Ensure all React imports resolve to the same instance
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  }
}; 