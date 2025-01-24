#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Validate eslint
npm run lint

# Display a message after successful linting
echo "ESLint validation passed successfully. Proceeding with build..."

tsc -b && vite build