#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Validate eslint
npm run lint

# Display a message after successful linting and testing
echo "ESLint validation and tests passed successfully. Proceeding with build..."
# Run tests and abort if they fail
npm run test

# Display a message after successful build
echo "Test passed successfully."


tsc -b && vite build