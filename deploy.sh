#!/bin/bash

echo "==============================================="
echo "Deploying Misaka Sushi website to Vercel"
echo "==============================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Make script executable
chmod +x deploy.sh

# Deploy to Vercel with production flag
echo "Starting deployment..."
vercel --prod

echo "==============================================="
echo "Deployment complete! Check the URL above."
echo "==============================================="