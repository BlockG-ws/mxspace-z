FROM node:16-alpine
COPY . .

ENV TZ=Asia/Shanghai
ENV NODE_ENV=production
CMD sh install.sh
