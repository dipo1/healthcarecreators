# /var/www/hcc/deploy.sh
#!/bin/bash
git pull origin main
npm install
npm run build
pm2 restart hcc
