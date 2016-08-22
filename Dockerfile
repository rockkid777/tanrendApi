FROM linode/lamp

RUN apt-get update
RUN yes | apt-get install curl libcurl3 libcurl3-dev php5-curl
COPY apacheWatcher.bash /usr/share/bin/
