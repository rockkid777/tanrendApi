FROM linode/lamp

RUN apt-get update
RUN yes | apt-get install curl libcurl3 libcurl3-dev php5-curl php5-cli git php5-mysql
RUN curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
COPY apacheWatcher.bash /usr/share/bin/
