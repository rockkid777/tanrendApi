#/bin/bash

service apache2 start

while [[ 1 -eq 1 ]]; do
    service apache2 status || exit 1
    sleep 10
done

exit 0
