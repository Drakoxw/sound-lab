## Use Node Slim image
FROM node:18-slim

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/sound-lab/server/main.js"]
