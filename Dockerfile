FROM php:8.2-apache

RUN a2dismod mpm_event mpm_worker && a2enmod mpm_prefork

COPY . /var/www/html/

RUN docker-php-ext-install mysqli

EXPOSE 80