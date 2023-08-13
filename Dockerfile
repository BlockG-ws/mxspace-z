FROM node:16-alpine
COPY . .
RUN npm i -g pnpm
RUN pnpm install -g pm2

ENV TZ=Asia/Shanghai
CMD pm2 start ecosystem.config.js && pm2 log
