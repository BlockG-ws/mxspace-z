FROM node:16-alpine
COPY . .

ENV TZ=Asia/Shanghai
CMD sh install.sh  && echo "MixSpace Server Image."