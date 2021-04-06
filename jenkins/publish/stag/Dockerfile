FROM nginx:1.19.6
COPY ./ /usr/share/nginx/html/
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone