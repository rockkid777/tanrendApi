# !/bin/bash

echo -n '[';

i=1
count=$(ls *.csv | wc -l)
for a in $(ls *.csv); do
    szakirany=$(echo -n $a | cut -f1 -d'.')
    echo -n "{\"$szakirany\":"
    echo -n "["
    lineno=1
    filelength=$(cat $a | wc -l)
    for b in $(cat $a); do
        kod=$(echo -n $b | cut -f1 -d',')
        felev=$(echo -n $b | cut -f2 -d',')
        echo -n "{\"kurzuskod\": \"$kod\", \"felev\": $felev}"
        if [ $lineno -lt $filelength ]; then
            echo -n ','
        fi
        ((++lineno))
    done
    echo -n "]"
    echo -n "}"
    if [ $i -lt $count ]; then
        echo -n ','
    fi
    ((++i))
done

echo -n ']';

exit 0
