FROM nginx

COPY echo.js /etc/nginx/njs/echo.js

COPY nginx.conf /etc/nginx/nginx.conf
