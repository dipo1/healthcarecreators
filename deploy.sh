#!/bin/bash

set -e

# 1. Load variables
if [ -f .env.production ]; then
    set -a
    source .env.production
    set +a
else
    echo "Error: .env.production not found"
    exit 1
fi

# 2. Build
npm install
rm -rf .next
npm run build

# 3. Restart PM2
pm2 restart hcc --update-env
