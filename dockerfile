FROM nginx:latest
WORKDIR /usr/share/nginx/html/
RUN rm -rf *
COPY . /usr/share/nginx/html/
